import axios from 'axios';
import React, { useState } from 'react';
import NewsList from './components/NewsList'


const apiURL = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=20fc193dcf714b8d88294dd56bd60425"

const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get(apiURL).then((res) => {
      setData(res.data);
    });
  };

  return <NewsList/>;
};

export default App;
