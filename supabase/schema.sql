-- AmorPropio & SOS — esquema inicial (Sesión 6)
-- Ejecutar una sola vez en Supabase → SQL Editor → New query → pegar todo → Run.

-- ============================================================
-- 1. PROFILES — datos del onboarding, uno por usuaria
-- ============================================================
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  foco text,
  momento text,
  dias_semana int,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "select_own_profile" on public.profiles
  for select using ( (select auth.uid()) = id );
create policy "insert_own_profile" on public.profiles
  for insert with check ( (select auth.uid()) = id );
create policy "update_own_profile" on public.profiles
  for update using ( (select auth.uid()) = id ) with check ( (select auth.uid()) = id );

-- ============================================================
-- 2. ENTRADAS_DIARIO — el diario privado
-- ============================================================
create table public.entradas_diario (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  mood text not null check (mood in ('calma','ansiedad','tristeza','orgullo','cansancio')),
  texto text not null,
  created_at timestamptz not null default now()
);

create index entradas_diario_user_idx on public.entradas_diario(user_id, created_at desc);

alter table public.entradas_diario enable row level security;

create policy "select_own_entradas" on public.entradas_diario
  for select using ( (select auth.uid()) = user_id );
create policy "insert_own_entradas" on public.entradas_diario
  for insert with check ( (select auth.uid()) = user_id );
create policy "delete_own_entradas" on public.entradas_diario
  for delete using ( (select auth.uid()) = user_id );

-- ============================================================
-- 3. AFIRMACIONES_BANCO — contenido curado, lectura pública
-- ============================================================
create table public.afirmaciones_banco (
  id text primary key,
  foco text not null check (foco in ('dialogo','panico','abandono','otra')),
  texto text not null,
  ejercicio text not null
);

create index afirmaciones_banco_foco_idx on public.afirmaciones_banco(foco);

alter table public.afirmaciones_banco enable row level security;

create policy "select_afirmaciones_publico" on public.afirmaciones_banco
  for select using ( true );

-- ============================================================
-- 4. USER_PROGRESS — racha y contadores, uno por usuaria
-- ============================================================
create table public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  streak_days int not null default 0,
  week_completed boolean[] not null default array[false,false,false,false,false,false,false],
  total_rituals int not null default 0,
  ritual_done_today boolean not null default false,
  last_ritual_date date,
  joined_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

create policy "select_own_progress" on public.user_progress
  for select using ( (select auth.uid()) = user_id );
create policy "update_own_progress" on public.user_progress
  for update using ( (select auth.uid()) = user_id ) with check ( (select auth.uid()) = user_id );

-- ============================================================
-- 5. SUSCRIPCIONES — estado del plan (lo escribe el webhook de Hotmart)
-- ============================================================
create table public.suscripciones (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null default 'trial' check (plan in ('trial','anual','mensual')),
  status text not null default 'trialing' check (status in ('trialing','active','canceled','past_due')),
  trial_ends_at timestamptz,
  hotmart_transaction_id text,
  updated_at timestamptz not null default now()
);

alter table public.suscripciones enable row level security;

create policy "select_own_suscripcion" on public.suscripciones
  for select using ( (select auth.uid()) = user_id );
-- Nota: INSERT/UPDATE de esta tabla los hace el webhook de Hotmart desde el
-- servidor con la service_role key (que ignora RLS) — no desde el navegador.

-- ============================================================
-- 6. Trigger: al registrarse una usuaria, crear sus filas iniciales
-- ============================================================
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id);
  insert into public.user_progress (user_id) values (new.id);
  insert into public.suscripciones (user_id, trial_ends_at)
    values (new.id, now() + interval '3 days');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
