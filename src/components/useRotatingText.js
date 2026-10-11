import { useEffect, useState } from "react";

export default function useRotatingText(phrases, intervalMs = 2600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % phrases.length), intervalMs);
    return () => clearInterval(id);
  }, [phrases.length, intervalMs]);
  return phrases[i];
}
