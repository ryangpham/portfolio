"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/data/portfolio";

function formatTime(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  const hh = String(hours).padStart(2, "0");
  return `${mm}/${dd}/${yyyy} ${hh}:${minutes}${ampm} ${DATA.timezoneLabel}`;
}

export function Timestamp() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: DATA.timezone })
      );
      setTime(formatTime(now));
    };
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="timestamp">
      {time}
    </p>
  );
}
