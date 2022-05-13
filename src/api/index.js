import { API_URLS} from '../utils';

const customFetch = async (url, {  ...customConfig } , loader) => {


  const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
  };


  const config = {
    ...customConfig,
    headers: {
      ...headers,
      
    },
  };

  

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    loader('false');
    if (data.status) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error('error',error);
    return {
      message: error.message,
      success: false,
    };
  }

  
};

export const getTags = (loader) => {
  return customFetch(API_URLS.tags(), {
    method: 'GET',
  },loader);
};

export const getEvents = (event_category,event_sub_category,tag_list,offset,loader) => {
  return customFetch(API_URLS.events(event_category,event_sub_category,tag_list,offset), {
    method: 'GET',
  },loader);
};
