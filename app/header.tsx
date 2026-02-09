import Image from "next/image";

export default function Header() {
    return (
        <div className="h-23 bg-(--header) shrink-0 flex flex-col items-center justify-center">
            <p className="text-xl font-bold">Успейте открыть пробную неделю</p>
            <div className="flex gap-1">
                <Image
                        src="/star.svg"
                        alt="star image left"
                        width={10}
                        height={10}
                    /> 
                <p className="text-2xl font-bold text-(--secondary-300)">15:59</p>
                <Image
                        src="/star.svg"
                        alt="star image right"
                        width={10}
                        height={10}
                    /> 
            </div>
            
        </div>
    )
}