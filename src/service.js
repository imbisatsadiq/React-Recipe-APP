const queryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY
}


//REACT_APP_APP_ID=4e4a6b39
//REACT_APP_APP_KEY=eac1daa8ea3be84fc0a5bbd449744206	


console.log('App ID:', queryStrings.app_id);
console.log('App Key:', queryStrings.app_key);

export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  try {
    const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  } catch (e) {
    console.error('Error fetching data:', e);
    return e;
  }
}
export const fetchTabData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;
  try {
    const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const response = await data.json();
    return response;
  } catch (e) {
    console.error('Error fetching data:', e);
    return e;
  }
}



