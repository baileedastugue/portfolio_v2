import { useEffect, useState } from 'react';
import getSessionStorage from '../GetSessionStorage';

const SetSessionStorage = (key, defaultVal) => {
     const [value, setValue] = useState(getSessionStorage(key, defaultVal));
     useEffect(() => {
          sessionStorage.setItem(key, JSON.stringify(value));
     }, [key, value]);
     return [value, setValue];
};

export default SetSessionStorage;
