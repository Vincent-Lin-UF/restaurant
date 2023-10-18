"use client"
import React, { useState, useEffect } from "react";

const CountDown: React.FC = () => {
  const calculateTimeLeft = (): number => {
    const now = new Date();
    let endOfDay = new Date(now);
    endOfDay.setHours(22, 0, 0, 0); // Setting time to 10:00 PM

    if (now > endOfDay) {
      // If it's past 10:00 PM, set target to 10:00 PM of the next day
      endOfDay.setDate(now.getDate() + 1);
    }

    return endOfDay.getTime() - now.getTime();
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / 1000 / 60) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {h}:{String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
    </span>
  );
};

export default CountDown;
