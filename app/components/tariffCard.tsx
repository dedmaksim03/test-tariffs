import { cn } from "../utils/cn"
import Image from "next/image";

interface TariffCardProps {
  title: string 
  price: string 
  message: string
  oldPrice?: string
  discount?: string
  backlit?: boolean
  onSelect?: () => void
  isSelected?:boolean
  isWide?: boolean
  className?: string
}

export function TariffCard({
    title,
    price,
    message,
    oldPrice,
    discount,
    backlit,
    onSelect,
    isSelected,
    isWide,
    className
  }: TariffCardProps) {
  return (
    <div className= {cn(
        `m-1 cursor-pointer flex justify-center relative bg-(--card) border-2 rounded-4xl ${backlit ? "border-(--card-border-backlit)" : "border-(--card-border)"}
          ${isSelected && "shadow-[0_0_12px_rgba(184,184,184,0.4)]"}`,
        className
      )}
      onClick={onSelect}>
      {discount && (<div className={`absolute ${backlit ? "right-15" : "right-10"} sm:left-7 sm:right-auto rounded-b-lg p-1 text-xs bg-(--card-discount)`}>{discount}</div>)}
      <div className={cn("flex gap-8 justify-center flex-wrap items-center w-9/10 sm:w-8/10", isWide ? "p-1 my-5 sm:mt-5 sm:mb-3" : "p-1 my-5 sm:mt-7 sm:mb-2")}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xxl mb-3">{title}</p>
          <p className="text-3xl sm:text-2xl 2xl:text-5xl text-(--secondary-300) text-nowrap relative">{price} ₽</p>
          {oldPrice && (<p className="self-end text-nowrap line-through opacity-50">{oldPrice} ₽</p>)}      

        </div>
        <div className="flex-1 min-w-5">
          <p className="text-xs">
             {message}
          </p>
        </div>
      </div>
      {backlit && (<div className="absolute text-base right-5 sm:right-3 top-0 sm:top-2 text-(--secondary-300)">хит!</div>)}
      {isSelected && <button className="h-5 w-5 border border-(--neutral-500) shrink-0 absolute bottom-2 right-4 cursor-pointer"> 
        <Image 
          src="/arrow.svg"
          alt="Arrow image"
          fill 
        />
      </button>}
    </div>
)
}
