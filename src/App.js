import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
  const onClick = () => {
    axios.get('/todos/1').then((res) => {
      setData(res.data);
    });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
};

export default App;
