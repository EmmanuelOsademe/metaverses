
import Image from "next/image";

interface Props {
    position: string;
    worldUrl: string;
    title: string;
    people: Array<string>;
    count: number;
}

const WorldCard: React.FC<Props> = ({position, worldUrl, title, people, count}) => {
    
    return (
        <div className={`absolute ${position} p-[6px] rounded-[20px] bg-[#5d6680]`}>
            <Image 
                src={worldUrl}
                alt={title}
                width={196}
                height={150}
                className="object-contain"
            />
            <div className="absolute bottom-0 mb-[18px] pl-[8px] flex flex-col gap-[4px]">
                <div className="flex justify-start items-center gap-2">
                    <div className="flex items-center justify-start gap-0">
                        {people.map((imgUrl, index) => (
                            <div key={index} className={`w-[24px] -translate-x-[${(index) * 10}px]`}>
                                <Image 
                                    key={index}
                                    src={imgUrl}
                                    alt="people"
                                    width={24}
                                    height={24}
                                    className={`object-contain`}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="font-normal text-[12px] text-white">+{count < 1000 ? count : `${(count/1000).toFixed(1)}k`} has joined</p>
                </div>
                <h2 className="font-bold text-[18px] text-white">{title}</h2>
            </div>
        </div>
    )
}

export default WorldCard;