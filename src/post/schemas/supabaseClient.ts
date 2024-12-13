import { createClient } from '@supabase/supabase-js';

//export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export const supabase = createClient(
    'https://olylzuhkibsqkhpgqfuc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9seWx6dWhraWJzcWtocGdxZnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MDg1NDQsImV4cCI6MjA0OTQ4NDU0NH0.wjsphj_0gjhFdTZlSyv5nKMwZ4E07Jmvlsty5OHvZRA'
    );