import React from 'react';

const App = () => {
  const talkerReplicant = nodecg.Replicant('talkerList');
  talkerReplicant.on('change', (value) => {
    console.log(value);
  });

  return (
    <>
      <button>{'Add'}</button>
    </>
  );
};

export default App;
