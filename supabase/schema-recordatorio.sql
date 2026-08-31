-- AmorPropio & SOS — recordatorio diario por correo (Sesión 7/8)
-- Ejecutar en Supabase → SQL Editor → New query → pegar → Run.
-- Junta el correo (de auth.users, solo accesible con service_role) con el
-- foco de cada usuaria, para que el cron job sepa a quién y qué mandarle.

create or replace function public.get_daily_reminder_recipients()
returns table (user_id uuid, email text, foco text)
language sql
security definer
set search_path = public
as $$
  select u.id, u.email, coalesce(p.foco, 'otra')
  from auth.users u
  join public.profiles p on p.id = u.id
  where u.email is not null;
$$;

-- Nadie puede llamar esta función desde el navegador (solo el cron job,
-- con la service_role key, que ignora los permisos de todas formas).
revoke execute on function public.get_daily_reminder_recipients from public, anon, authenticated;
