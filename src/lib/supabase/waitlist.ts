import { supabase } from '@/lib/supabase/client';
import type { WaitlistUser, Developer, Company } from '@/types/database.types';

export async function addDeveloperToWaitlist(
  userData: Omit<WaitlistUser, 'id' | 'created_at'>,
  developerData: Omit<Developer, 'id'>
) {
  const { data: user, error: userError } = await supabase
    .from('waitlist_users')
    .insert([userData])
    .select()
    .single();

  if (userError) throw userError;

  const { error: devError } = await supabase
    .from('developers')
    .insert([{ ...developerData, id: user.id }]);

  if (devError) throw devError;

  return user;
}

export async function addCompanyToWaitlist(
  userData: Omit<WaitlistUser, 'id' | 'created_at'>,
  companyData: Omit<Company, 'id'>
) {
  const { data: user, error: userError } = await supabase
    .from('waitlist_users')
    .insert([userData])
    .select()
    .single();

  if (userError) throw userError;

  const { error: companyError } = await supabase
    .from('companies')
    .insert([{ ...companyData, id: user.id }]);

  if (companyError) throw companyError;

  return user;
}