import React, { createContext, useContext, useState } from 'react'
import ReactDOM from "react-dom";
import {Container, Button, Inner, Overlay, Close } from './styles/player'
const PlayerContext = createContext();

export default function Player({ children, ...resProps }) {
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer}}>
            <Container {...resProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...resProps }) {
    const {showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer ? (
        ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="/videos/willy.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>, document.body
        ) 
    ) : null
}

Player.Button = function PlayerButton({...resProps}) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)
    return <Button onClick={() => setShowPlayer(!showPlayer)} {...resProps}></Button>
}

