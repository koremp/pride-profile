import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jiaypyfbgmgewfsapelt.supabase.co';
// eslint-disable-next-line max-len
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppYXlweWZiZ21nZXdmc2FwZWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQxMzgyNTQsImV4cCI6MTk2OTcxNDI1NH0.VTZuzLfZMs6ljkyVlSw8bYKD0cATuiVS9WSd9KvLPAo';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
);
