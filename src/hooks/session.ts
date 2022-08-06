import { useState } from 'react';

const useSessionStorage = (key: string, defaultValue?: Object) => {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });
  const updateValue = (newValue: Object) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
};

const clearSessionStorage = () => {
  sessionStorage.clear();
};

export { clearSessionStorage, useSessionStorage };
