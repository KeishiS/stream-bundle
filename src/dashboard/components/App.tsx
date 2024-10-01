import React from 'react';
import { useReplicant } from '../../hooks';

const App = () => {
  const [talkerList] = useReplicant('talkerList');
  console.log(`${talkerList}`);

  return (
    <>
      {talkerList && (
        <ul>
          {talkerList.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>
      )}
      <button>{'Add'}</button>
    </>
  );
};

export default App;
