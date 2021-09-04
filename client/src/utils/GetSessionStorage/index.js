const getSessionStorage = (key, defaultVal) => {
     const storedItem = sessionStorage.getItem(key);
     if (!storedItem) {
          return defaultVal;
     } else {
          return JSON.parse(storedItem);
     }
};

export default getSessionStorage;
