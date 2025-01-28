import { supabase } from "@/integrations/supabase/client";
import type { CompanyWaitlist, DeveloperWaitlist } from "@/types/waitlist";

export async function addDeveloperToWaitlist(data: DeveloperWaitlist) {
  const { error } = await supabase
    .from('waitlist_developers')
    .insert([data]);

  if (error) throw error;
}

export async function addCompanyToWaitlist(data: CompanyWaitlist) {
  const { error } = await supabase
    .from('waitlist_companies')
    .insert([data]);

  if (error) throw error;
}