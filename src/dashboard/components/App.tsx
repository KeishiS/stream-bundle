import React from 'react';
import { useReplicant } from '../../hooks';

const App = () => {
  const [talkList] = useReplicant('talkList');
  const [currentIdx] = useReplicant('currentIdx');
  console.log(`${talkList}`);

  return (
    <>
      {talkList && (
        <ul>
          {talkList.map((talkInfo, idx) => (
            <li key={idx} style={{ color: idx == currentIdx ? 'red' : 'white' }}>
              Name: {talkInfo.name}, title: {talkInfo.title}
            </li>
          ))}
        </ul>
      )}
      <div>現在の番号: {currentIdx}</div>
      <button onClick={() => nodecg.sendMessage('prevIdx')}>Prev</button>
      <button onClick={() => nodecg.sendMessage('nextIdx')}>Next</button>
    </>
  );
};

export default App;
