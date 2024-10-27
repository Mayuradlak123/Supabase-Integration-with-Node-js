const { createClient } = require('@supabase/supabase-js');

require("dotenv/config")
// Replace with your own Supabase project URL and API key
const SUPABASE_URL = process.env.DB_URL;  
const SUPABASE_ANON_KEY = process.env.API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
(async function fetchData() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Supabase DB Connected Successfully');
    }
})();
module.exports = supabase