import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iqbwxkxjvtxvxvvzwvxr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYnd4a3hqdnR4dnh2dnp3dnhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5MjY1NzAsImV4cCI6MjAyNTUwMjU3MH0.Hs_GQZzXW3VQgG_FYhBxGHLEWAqz_QlQHHGFqgC5QYE';

export const supabase = createClient(supabaseUrl, supabaseKey);