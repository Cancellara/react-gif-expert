export const getGifs = async( category ) => {
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UxD49YhjhplHSdLPTDdTT9vTiJTO33Gb&q=${ category }&limit=${ limit }`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
  
    
    const gifts = data.map( img => ({
      id: img.id, 
      title: img.title,
      url: img.images.downsized.url,
    }));
  
    
    return gifts;
  }