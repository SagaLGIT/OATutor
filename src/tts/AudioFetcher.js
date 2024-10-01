// import { useState, useEffect, useRef } from 'react'; // when using in react

class AudioFetcher {
    constructor() {
        this.audio = null;
        this.isPlaying = false;
    }

    async fetchAudio(text) {
        try {
            const response = await retrieveTts(text);
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
