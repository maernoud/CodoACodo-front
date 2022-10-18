const weatherApi = async () => {
    const response = await fetch('https://api.weatherbit.io/v2.0/current?lat=-31.165904180248948&lon=-64.34234372553179&key=3c1509db4eb548c089becc1523d7b901');
    
    const myJson = await response.json(); //extrae el JSON de la respuesta http
    
  }
  
  
 