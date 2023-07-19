"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "@/utils/motion";
import { ReactElement } from "react";

interface Props {
    title: string;
    textStyles: string;
}

const TypingText: React.FC<Props> = ({title, textStyles}) => {

    return (
        <motion.p
            variants={textContainer}
            className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
        >
            {Array.from(title).map((letter, index) => (
                <motion.span
                    key={index}
                    variants={textVariant2}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.p>
    )
}

interface TitleProps {
    title: ReactElement;
    textStyles: string
}

const TitleText: React.FC<TitleProps> = ({title, textStyles}) => {

    return (
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
        >
            {title}
        </motion.h2>
    )
}

export {
    TypingText,
    TitleText
}
