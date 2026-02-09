"use client"

import Image from "next/image";
import { Button } from 'antd';
import { TariffCard } from "./components/tariffCard";
import { useState } from "react";
import { Tariff } from "./types/Tariff";

type Props = {
  tariffs: Tariff[];
};

export default function PageClient({ tariffs }: Props) {

  let [agree, setAgree] = useState(false)
  let [selectedCard, setSelectedCard] = useState<null | string>(null)

  let onSetAgree = () => {
    setAgree(!agree)
  }

  let onSetSelectedCard = (id: string) => {
    console.log(id)
    setSelectedCard(id)
  }

  const sortedTariffs = [...tariffs].sort(
    (a, b) => Number(b.is_best) - Number(a.is_best)
  );

  const bestTariff = sortedTariffs.find(t => t.is_best);
  const otherTariffs = sortedTariffs.filter(t => !t.is_best);

  return (
    <div className="bg-(--base-background) flex flex-col items-center justify-center grow-1">
      <div className="m-3 h-full w-2/3 xl:w-220 2xl:w-265 flex flex-col gap-7 justify-center">
        <div className="">
          <h1 className="text-white text-3xl font-bold">Выбери подходящий для себя{" "}<span className="text-(--secondary-300)"> тариф</span></h1>
        </div>
        <div className="flex gap-4 xl:gap-10 w-full justify-between">
          <div className="w-150 xl:w-200 2xl:w-70 h-full relative">
            <Image
                  src="/image.svg"
                  alt="Main image"
                  fill
                />            
          </div>
          <div className="flex flex-col gap-1 max-w-100 xl:max-w-120 2xl:max-w-160">
            {bestTariff && (
                <div className="relative">
                    <TariffCard
                    backlit
                    title={bestTariff.period}
                    price={bestTariff.price.toString()}
                    oldPrice={bestTariff.full_price.toString()}
                    message={bestTariff.text}
                    discount={`-${Math.round(
                        (1 - bestTariff.price / bestTariff.full_price) * 100
                    )}%`}
                    onSelect={() => onSetSelectedCard(bestTariff.id)}
                    isSelected={selectedCard === bestTariff.id}
                    />
                </div>
            )}

            <div className="flex h-55 gap-1">
                {otherTariffs.map((tariff, index) => (
                    <div key={`${tariff.id}-${index}`} className="flex-1 h-full"> 
                    <TariffCard
                        className="h-full"
                        title={tariff.period}
                        price={tariff.price.toString()}
                        oldPrice={tariff.full_price.toString()}
                        message={tariff.text}
                        discount={`-${Math.round(
                        (1 - tariff.price / tariff.full_price) * 100
                        )}%`}
                        onSelect={() => onSetSelectedCard(tariff.id)}
                        isSelected={selectedCard === tariff.id}
                    />
                    </div>
                ))}
            </div>

            <div className="flex gap-1 items-start text-xs bg-(--neutral-300) rounded-2xl w-8/10 p-2 mt-2">
                <Image
                  src="/attention.svg"
                  alt="Attention image"
                  width={30}
                  height={30}
                />        
              Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
            </div>
            <div className="flex gap-2 items-center text-xs rounded-2xl w-9/10 mt-2">
                <button className="h-5 w-5 border border-(--neutral-500) shrink-0 relative cursor-pointer" onClick={onSetAgree}> 
                  {agree && <Image 
                    src="/arrow.svg"
                    alt="Arrow image"
                    fill 
                  />}  
                </button>      
                Я согласен с офертой рекуррентных платежей и Политикой конфиденциальности
            </div>
            {/* <button className="flex justify-center items-center bg-(--secondary-300) w-60 h-10 rounded-xl text-black my-1">Купить</button> */}
            <Button
              type="primary"
              className="
                flex justify-center items-center
                !bg-(--buy-button)
                hover:!bg-(--buy-button-hover)
                w-60 h-10
                rounded-xl
                !text-black
                my-1
              "
            >
              Купить
            </Button>
            <p className="text-[0.6rem] opacity-50">Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. 
              Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания 
              пользователя</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 border border-(--neutral-500) rounded-xl p-4">
          <div className="w-100 flex justify-center p-1 border rounded-xl border-(--footer-border) text-(--footer-text)">Гарантия возврата 30 дней</div>
          <p className="text-xs">Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! 
          Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.</p>
        </div>
      </div>
    </div>
  );
}