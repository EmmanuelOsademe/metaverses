"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { TypingText, TitleText, WorldCard } from "@/components";
import { fadeIn, staggerContainer} from "@/utils/motion";
import Image from "next/image";


const World: React.FC = () => {

    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| Peaple on the World" textStyles="text-center"/>
                <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center"/>
                <motion.div
                    variants={fadeIn("up", "tween", 0.3, 1)}
                    className="relative m-[68px] flex w-full h-[550px]"
                >
                    <img 
                        src="/map.png"
                        alt="map"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                        <img 
                            src="/people-01.png"
                            alt="people 01"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                        <img 
                            src="/people-02.png"
                            alt="people 02"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                        <img 
                            src="/people-03.png"
                            alt="people 03"
                            className="w-full h-full"
                        />
                    </div>
                    <WorldCard 
                        position="top-[40%] left-[20%]"
                        worldUrl="/upside-world.png"
                        title="The Upside Down"
                        count={1522}
                        people={["/people-02.png", "/people-03.png"]}
                    />
                    <WorldCard 
                        position="top-[10%] right-[20%]"
                        worldUrl="/hawkins-world.png"
                        title="Hawkin's Lab"
                        count={2501}
                        people={["/people-01.png", "/people-03.png"]}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default World;