import { useEffect, useState } from "react";

export default function UseLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null && storedValue !== "undefined"
      ? JSON.parse(storedValue)
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
