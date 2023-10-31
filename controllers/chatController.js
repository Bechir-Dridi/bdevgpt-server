const createChat = async (req, res) => {
    try {
        const { msg } = req.body
        //console.log("user req received:", msg)

        console.log("createChat msg:", msg)
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "max_tokens": 100,
                "messages": [{ "role": "user", "content": msg }],
            })
        });

        const json = await response.json();

        console.log('response:', json)
        res.status(200).json(json)

        //console.log('response:', json.choices[0].message.content)
        //res.status(200).json(json.choices[0].message.content)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createChat
}