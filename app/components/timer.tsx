"use client";

import { useEffect, useState } from "react";

type Props = {
  initialMinutes: number;
  initialSeconds?: number;
  warningSeconds?: number;
  onEnd?: () => void
};

export default function CountdownTimer({
  initialMinutes,
  initialSeconds = 0,
  warningSeconds = 30,
  onEnd
}: Props) {
  const [time, setTime] = useState(initialMinutes * 60 + initialSeconds);
  const [blink, setBlink] = useState(false);

  // Таймер
  useEffect(() => {
    if (time <= 0 && onEnd) onEnd();
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // Мигание
  useEffect(() => {
    if (time <= warningSeconds && time > 0) {
      const blinkInterval = setInterval(() => {
        setBlink(prev => !prev);
      }, 500);

      return () => clearInterval(blinkInterval);
    } else {
      setBlink(false);
    }
  }, [time, warningSeconds]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <p
      className={`text-2xl font-bold transition-colors duration-400 ${
        blink ? "text-(--accent-300)" : "text-(--secondary-300)"
      }`}
    >
      {format(minutes)}:{format(seconds)}
    </p>
  );
}
