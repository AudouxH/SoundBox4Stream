import React, { useState, useRef, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import './Sound.css';
import pause from './assets/pause.png'
import play from './assets/play-button.png'
import reset from './assets/reload.png'

const Sound = ({ audioPath = "", audioText = "" }) => {
    const [audioStatus, changeAudioStatus] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const myRef = useRef();

    const startAudio = () => {
        myRef.current.play();
        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    const resetAudio = () => {
        myRef.current.load();
        changeAudioStatus(false);
    };

    useEffect(() => {
        if (currentTime === duration) {
            changeAudioStatus(false);
            setCurrentTime(0);
        }
    }, [currentTime, duration])

    return (
        <div className="Sound">
            <audio
                ref={myRef}
                src={audioPath}
                onLoadedData={() => {
                    setDuration(myRef.current.duration);
                }}
                onTimeUpdate={() => {
                    setCurrentTime(myRef.current.currentTime);
                }}
            />
            <p className="text">{audioText}</p>
            {/* {
                duration > 0 ? <p>{duration.toLocaleString()}'s</p> : <></>
            } */}
            <div className="button-container">
                <ProgressBar bgcolor="#9246fe" progress={Math.trunc(100 - (((duration - currentTime) / duration) * 100))} />
                {audioStatus ? (
                    <button onClick={pauseAudio} className="button">
                        <img src={pause} alt='pause' className="icon" />
                    </button>
                ) : (
                    <button onClick={startAudio} className="button">
                        <img src={play} alt='play' className="icon" />
                    </button>
                )}
                <button onClick={resetAudio} className="button"><img src={reset} alt='play' className="icon" /></button>
            </div>
        </div>
    );
}

export default Sound;