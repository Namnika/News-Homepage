import { useState, useRef } from "react";
import axios from "axios";
import { IoPlay, IoPause } from "react-icons/io5";
import PropTypes from "prop-types";

AudioComponent.propTypes = {
    voiceId: PropTypes.string,
    apiKey: PropTypes.string,
    text: PropTypes.string,
    voiceSettings: PropTypes.object
};

export default function AudioComponent({
    voiceId,
    apiKey,
    text,
    voiceSettings
}) {
    const [loading, setLoading] = useState(true);
    const [play, setPlay] = useState(false);
    const audio = useRef(null);
    const [sourceUrl, setSourceUrl] = useState(null);
    const [error, setError] = useState("");

    const convertAndStream = async () => {
        setLoading(true);
        setError("");
        setPlay(!play);

        const baseUrl = import.meta.env.VITE_VOICE_BASEURL;
        const headers = {
            "Content-Type": "application/json",
            "xi-api-key": apiKey
        };

        const body = {
            text,
            voice_settings: voiceSettings
        };

        try {
            const response = await axios.post(`${baseUrl}/${voiceId}`, body, {
                headers,
                responseType: "blob"
            });

            if (response.status == 200) {
                return setSourceUrl(URL.createObjectURL(response.data));
            } else {
                setError("Error: Unable to stream audio.");
            }
        } catch (err) {
            setError("Error: Unable to stream audio.");
        } finally {
            setLoading(false);
        }
    };

    function onPlay() {
        setPlay(true);
    }

    function onPause() {
        setPlay(false);
    }

    function playAudio() {
        audio.current.play();
        const audioE1 = audio;
        audioE1.current.addEventListener("play", onPlay);
        audioE1.current.addEventListener("pause", onPause);
    }

    function pauseAudio() {
        audio.current.pause();
    }

    return (
        <div>
            <audio src={sourceUrl} ref={audio}>
                {error}
            </audio>

            <button
                title="play to listen news"
                className="audio-btn"
                onClick={convertAndStream}
                disabled={loading}
            >
                {!play && (
                    <IoPlay
                        onClick={playAudio}
                        size={13}
                        style={{ color: "hsl(36,100%,99%)" }}
                    />
                )}
                {play && (
                    <IoPause
                        onClick={pauseAudio}
                        size={13}
                        style={{ color: "hsl(36,100%,99%)" }}
                    />
                )}
            </button>
            {error && <small data-testid="error" className="text-rose-600 space-y-2">{error}</small>}
        </div>
    );
}
