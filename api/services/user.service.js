
const supabase = require('../supabase/config');
/**
 * Create a new user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {Promise<void>}
 */
const createUser = async (req, res) => {
    const { name, email, status ,created_at, updated_at,id} = req.body;
    const { data, error } = await supabase
        .from('users') // Change 'users' to your table name
        .insert([{ name, email, status,created_at, updated_at,id }]);

    if (error) return res.status(400).json({ error });
    res.status(201).json(data);
};

// Read all users
const getAllUsers = async (req, res) => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) return res.status(400).json({ error });
    res.status(200).json(data);
};

// Read a single user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return res.status(400).json({ error });
    res.status(200).json(data);
};

// Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, status } = req.body;
    const { data, error } = await supabase
        .from('users')
        .update({ name, email, status })
        .eq('id', id);

    if (error) return res.status(400).json({ error });
    res.status(200).json(data);
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

    if (error) return res.status(400).json({ error });
    res.status(204).send(); // No content
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
