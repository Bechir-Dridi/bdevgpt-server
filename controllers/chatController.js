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

        const json = await response.json();

        console.log('response:', json)
        res.status(200).json(json)

        // console.log('response:', json.choices[0].message.content)
        //res.status(200).json(json.choices[0].message.content)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

module.exports = {
    createChat
};
