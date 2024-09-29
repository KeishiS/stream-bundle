import React from 'react';
import { createRoot } from 'react-dom/client';

type TalkInfo = {
  id: number;
  name: string;
  title: string;
};

const talklist: TalkInfo[] = [
  {
    id: 0,
    name: 'presenter 1',
    title: 'talk A',
  },
  {
    id: 1,
    name: 'presenter 2',
    title: 'talk B',
  },
  {
    id: 2,
    name: 'presenter 3',
    title: 'talk C',
  },
];

const app = (
  <>
    <ul>
      {talklist.map((talk, idx) => (
        <li key={idx}>{talk.name}</li>
      ))}
    </ul>
  </>
);
createRoot(document.getElementById('app')!).render(app);
