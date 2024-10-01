import type { CreateNodecgInstance } from 'ts-nodecg/server';
import type { ReplicantMap, MessageMap } from '../maps';

type NodecgInstance = CreateNodecgInstance<'stream-bundle', undefined, ReplicantMap, MessageMap>;

module.exports = (nodecg: NodecgInstance) => {
  const initValue: string[] = ['Presenter 1', 'Presenter 2'];

  const talkerReplicant = nodecg.Replicant('talkerList', { defaultValue: initValue });

  talkerReplicant.on('change', (value) => {
    console.log(`[CHANGED] value: ${value}`);
  });
  nodecg.listenFor('addTalker', (talker) => {
    const updated = [...talkerReplicant.value, talker];
    talkerReplicant.value = updated;
    console.log(`[Listen: addTalker] updated: ${updated}`);
  });
};
