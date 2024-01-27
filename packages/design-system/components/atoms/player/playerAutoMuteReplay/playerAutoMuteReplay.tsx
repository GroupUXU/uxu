import {useState, useCallback, useRef, useEffect} from 'react';
import type { ReactElement } from "react";
import ReactPlayer from 'react-player';
import Img from 'next/image'
import { Volume2, VolumeX } from 'react-feather';
import { checkIsDOM } from "utils";
import { PlayerAutoMuteReplayProps } from "./types";
import styles from './playerAutoMuteReplay.module.scss';

export function PlayerAutoMuteReplay({ width, height, urlVideo, urlCover, autoPlay = true }: PlayerAutoMuteReplayProps): ReactElement | null {
    const [isDom, setIsDom ] = useState(false);
    const [isPlaying, setIsPlaying] = useState({ autoPlay, isMuted: true, isLoop: true });
    const playerRef = useRef<ReactPlayer>(null);

    const toggleMute = useCallback(() => {
        setIsPlaying(prevState => ({
            ...prevState,
            isMuted: !prevState.isMuted
        }));
    }, []);

    useEffect(() => {
        if (playerRef.current && !isPlaying.isMuted) {
            playerRef.current.seekTo(0, 'seconds');
            setIsPlaying(prevState => ({ ...prevState, autoPlay: true }));
        }
    }, [isPlaying.isMuted]);

    useEffect(() => {
        checkIsDOM(() => {
            setIsDom(true);
        })
    },[])


    if(!isDom) return null;

    return (
        <button className={styles.wrapper} style={{ width: `${width}px`, height: `${height}px` }} onClick={toggleMute}>
            <div className={styles.controls}>
                {isPlaying.isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}
            </div>
            <ReactPlayer
                ref={playerRef}
                width={404}
                height={720}
                url={urlVideo}
                playing={isPlaying.autoPlay}
                muted={isPlaying.isMuted}
                loop={isPlaying.isLoop}
                fallback={<Img src={urlCover} height={height} width={width} layout="responsive" alt="cover" />}
            />
        </button>
    );
};
