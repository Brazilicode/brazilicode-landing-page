import { supabase } from "@/integrations/supabase/client";
import type { DeveloperWaitlist } from "@/types/waitlist";

export async function addDeveloperToWaitlist(data: DeveloperWaitlist) {
  const { error } = await supabase
    .from('waitlist_developers')
    .insert([data]);

  if (error) throw error;
}