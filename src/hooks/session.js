import { useEffect, useState } from 'react';

const useSessionStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const clearSessionStorage = () => {
  sessionStorage.clear();
};

export { clearSessionStorage, useSessionStorage };
