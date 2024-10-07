// import { useState, useEffect, useRef } from 'react'; // when using in react
// const axios = require('axios');
import axios from 'axios';
// import retrieveTts from "./TtsApiCall";

class AudioFetcher {
    constructor() {
        this.audio = null;
        this.isPlaying = false;
    }

    async retrieveTts(text) {
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
        console.log("Running TTS API call");
        console.log(response.data);
    
        return response;
    }

    async fetchAudio(text) {
        // debugger;
        try {
            const response = await this.retrieveTts(text);
            const blob = new Blob([response.data], { type: 'audio/mpeg' });
            const url = URL.createObjectURL(blob);
            console.log("URL:", url);
            console.log("Response:", response);

            this.audio = new Audio(url);
            this.audio.addEventListener('ended', () => {
                this.isPlaying = false;
            });
            
        } catch (error) {
            console.error('Error fetching audio file:', error);
        }
    }

    playPause() {
        if (this.audio) {
            if (this.isPlaying) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
            this.isPlaying = !this.isPlaying;
        }
    }
}

export default AudioFetcher;


// import axios  from 'axios'; // when using in react



/* Paced version
audio will become an array of Audio objects



*/


/*
const useAudioFetcher = () => {
    const [audioUrl, setAudioUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const fetchAudio = async (text) => {
        try {
            const response = await retrieveTts(text);
            const blob = new Blob([response.data], { type: 'audio/mpeg' });
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);
            console.log("URL:", url);
            console.log("Response:", response);

        } catch (error) {
            console.error('Error fetching audio file:', error);
        }
    };

    useEffect(() => {
        if (audioUrl) {
            audioRef.current = new Audio(audioUrl);
            audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [audioUrl]);

    const playPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return {
        fetchAudio,
        isPlaying,
        playPause,
    };
};

// const audioFetcher = useAudioFetcher();
// audioFetcher.fetchAudio("Hello");

export default useAudioFetcher;
*/
