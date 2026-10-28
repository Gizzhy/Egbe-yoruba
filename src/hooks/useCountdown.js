import { useEffect, useState } from "react";

function diff(targetMs) {
  const total = Math.max(0, targetMs - Date.now());
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

/**
 * Live countdown to an ISO timestamp (include the UTC offset!).
 * Stops ticking once the target is reached.
 */
export default function useCountdown(isoTarget) {
  const targetMs = new Date(isoTarget).getTime();
  const [time, setTime] = useState(() => diff(targetMs));

  useEffect(() => {
    setTime(diff(targetMs));
    if (targetMs <= Date.now()) return undefined;

    const id = setInterval(() => {
      const next = diff(targetMs);
      setTime(next);
      if (next.total === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return time;
}
