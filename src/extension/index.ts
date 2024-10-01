import type { CreateNodecgInstance } from 'ts-nodecg/server';
import type { ReplicantMap, MessageMap } from '../maps';
import type { TalkInfo } from '../types/schemas';

type NodecgInstance = CreateNodecgInstance<'stream-bundle', undefined, ReplicantMap, MessageMap>;

module.exports = (nodecg: NodecgInstance) => {
  const initValue: TalkInfo[] = [
    {
      name: 'Presenter 1',
      title: 'Talk A',
    },
    {
      name: 'Presenter 2',
      title: 'Talk B',
    },
  ];

  const talkListRep = nodecg.Replicant('talkList', {
    defaultValue: initValue,
  });
  const idxRep = nodecg.Replicant('currentIdx', {
    defaultValue: 1,
  });

  talkListRep.on('change', (value) => {
    console.log(`[CHANGED] value: ${value}`);
  });
  nodecg.listenFor('addTalkInfo', (talkInfo) => {
    console.log(`[ListenFor] talker: ${talkInfo}`);
    const updated = [...talkListRep.value, talkInfo];
    talkListRep.value = updated;
  });

  nodecg.listenFor('prevIdx', () => {
    idxRep.value = Math.max(0, idxRep.value - 1);
  });
  nodecg.listenFor('nextIdx', () => {
    const len = talkListRep.value.length;
    idxRep.value = Math.min(len - 1, idxRep.value + 1);
  });
};
