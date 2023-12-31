import styles from "@/styles";

interface Props {
    step: number;
    text: string;
}

const StartSteps: React.FC<Props> = ({step, text}) => {

    return (
        <div className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter}  w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
                <p className="font-bold text-[20px] text-white">0{step}</p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-32">
                {text}
            </p> 
        </div>
    )
}

export default StartSteps;