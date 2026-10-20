import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const TypingAnimation = () => {
    const words = ["Dast", "Ideas into Designs"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (index === words.length - 1 && subIndex === words[index].length && !reverse) {
            // Stopped at the end of the last word
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            // Finished typing a word, wait then reverse (unless it's the last word, handled above)
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <h2 className="text-xl font-light tracking-[0.2em] uppercase min-w-[200px]">
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h2>
    );
};
