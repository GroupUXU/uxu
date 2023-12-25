import { useState, useEffect, useRef } from 'react';
import type { ReactElement } from "react";
import ReactPlayer from 'react-player';
import { Volume2, VolumeX } from 'react-feather';
import styles from './player.module.scss';

export function PlayerAutoMuteReplay(): ReactElement {
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoop, setIsLoop] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleMute = () => {
        setIsMuted(!isMuted);

        if (!isMuted) {
            setIsLoop(false);
        } else {
            if (playerRef.current) {
                playerRef.current.seekTo(0);
                setIsAutoPlay(true);
            }
        }
    };

    return (
        <button className={styles.wrapper} style={{width: '406px', height: '720px'}} onClick={toggleMute}>
            <div className={styles.controls}>{isMuted ? <VolumeX size={30} /> : <Volume2 size={30} />}</div>
            {isClient && (
                <ReactPlayer
                    ref={playerRef}
                    width={406}
                    height={720}
                    url='/video/test.mp4'
                    playing={isAutoPlay}
                    muted={isMuted}
                    loop={isLoop}
                    fallback={<p>Loading player...</p>}
                />
            )}
        </button>
    );
}
