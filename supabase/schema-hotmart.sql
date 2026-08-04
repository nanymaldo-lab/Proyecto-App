-- AmorPropio & SOS — función para el webhook de Hotmart (Sesión 6)
-- Ejecutar en Supabase → SQL Editor → New query → pegar → Run.
-- El webhook la llama con el service_role (que salta el RLS) para
-- actualizar la suscripción de la usuaria identificándola por su correo.

create or replace function public.upsert_suscripcion_by_email(
  p_email text,
  p_plan text,
  p_status text,
  p_hotmart_transaction_id text,
  p_trial_ends_at timestamptz default null
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid;
begin
  select id into v_user_id from auth.users where email = p_email limit 1;
  if v_user_id is null then
    return false;
  end if;

  insert into public.suscripciones (user_id, plan, status, hotmart_transaction_id, trial_ends_at, updated_at)
  values (v_user_id, p_plan, p_status, p_hotmart_transaction_id, p_trial_ends_at, now())
  on conflict (user_id) do update set
    plan = excluded.plan,
    status = excluded.status,
    hotmart_transaction_id = excluded.hotmart_transaction_id,
    trial_ends_at = coalesce(excluded.trial_ends_at, public.suscripciones.trial_ends_at),
    updated_at = now();

  return true;
end;
$$;

-- Nadie puede llamar esta función desde el navegador (solo el webhook,
-- con la service_role key, que ignora los permisos de todas formas) —
-- se revoca la ejecución de los roles públicos por las dudas.
revoke execute on function public.upsert_suscripcion_by_email from public, anon, authenticated;
