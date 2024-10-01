const axios = require('axios');
// import axios  from 'axios'; // when using in react

async function retrieveTts(text) {
    const inputVoice = "alloy"; // https://platform.openai.com/docs/guides/text-to-speech/voice-options
    const inputModel = "tts-1"; // https://platform.openai.com/docs/guides/text-to-speech/audio-quality
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = "https://api.openai.com/v1/audio/speech";

    const payload = {
        model: inputModel,
        input: text,
        voice: inputVoice,
        response_format: "mp3",
    };
    const headers = {
        Authorization: `Bearer ${apiKey}`, // API key for authentication
    };

    // Make a POST request to the OpenAI API
    const response = await axios.post(endpoint, payload, {
        headers: headers,
        responseType: "stream",
    });
    console.log(response.data);

    return response;
}

// retrieveTts("Hello")

module.exports = retrieveTts;