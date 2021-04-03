import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import useCountdown from "@bradgarropy/use-countdown"
import Confetti from "react-confetti";

const CountDownContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #313A3A;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Countdown = () => {
    const [complete, setComplete] = useState(false);

    const countdown = useCountdown({
        seconds: 15,
        onCompleted: () => setComplete(true),
    })

    return (
            <CountDownContainer>
                {complete && <Confetti />}
                <AnimatePresence>
                    <motion.h1
                        key={countdown.seconds}
                        exit={{ y: 75, opacity: 0, position: "absolute" }}
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                        }}
                    >
                        {countdown.seconds}
                    </motion.h1>
                </AnimatePresence>
            </CountDownContainer>
    )
}
