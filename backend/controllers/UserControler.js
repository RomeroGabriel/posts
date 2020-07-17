const { get } = require('axios').default;

module.exports = {
    getPostUser: async (req, res) => {
        try {
            const [users, post] = await Promise.all([
                get(`${process.env.URLBase}users`),
                get(`${process.env.URLBase}posts`),
            ]);
            const usersFiltered = users.data.filter((d) => {
                return d.company.name.toLowerCase().includes("group");
            });

            const finalResult = usersFiltered.map((u) => {
                const postUser = post.data.filter((p) => p.userId === u.id);
                return {
                    ...u,
                    postUser,
                };
            });

            return res.json({ sucess: true, result: finalResult });
        }
        catch (e) {
            return res.status(500).json({
                sucess: false,
                message: 'Erro ao buscar usuários',
            });
        }
    },
};