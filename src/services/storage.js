export const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await sessionStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.log("errro in asyncStorage storage", e);
    }
  };

  export const getData = async (key) => {
    try {
      const jsonValue = await sessionStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log("errro in asyncStorage getting", e);
    }
  };
  
  export const removeData = async (storedKey) => {
    try {
      await sessionStorage.removeItem(storedKey);
    } catch (e) {}
  };
  