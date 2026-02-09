"use client";

import { useDispatch } from "react-redux";
import { setDiscountActive } from "./store/discountSlice";

import Image from "next/image";
import Timer from "./components/timer";

export default function Header() {
    const dispatch = useDispatch();

    const handleTimerEnd = () => {
        dispatch(setDiscountActive(false));
    };

    return (
        <div className="h-23 p-2 bg-(--header) shrink-0 flex flex-col items-center justify-center">
            <p className="text-base sm:text-xl font-bold">Успейте открыть пробную неделю</p>
            <div className="flex gap-1">
                <Image
                        src="/star.svg"
                        alt="star image left"
                        width={10}
                        height={10}
                    /> 
                <Timer initialMinutes={2} initialSeconds={0} warningSeconds={30} onEnd={handleTimerEnd}/>
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