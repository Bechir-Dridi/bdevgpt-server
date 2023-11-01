const axios = require('axios');

const createChat = async (req, res) => {

    try {

        const { msg } = req.body;

        console.log("User request received:", msg);

        const response = await axios({
            method: 'post',
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            data: {
                model: "gpt-3.5-turbo",
                max_tokens: 100,
                messages: [
                    { role: "user", content: msg }
                ]
            }
        });

        const json = response.data;

        console.log('API response:', json);

        res.status(200).json(json);

    } catch (error) {

        console.error(error);
        res.status(500).send('Internal Server Error');

    }

};

module.exports = {
    createChat
};