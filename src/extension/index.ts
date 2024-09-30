import type NodeCG from '@nodecg/types';

module.exports = (nodecg: NodeCG.ServerAPI) => {
  const initValue: string[] = ['Presenter 1', 'Presenter 2'];

  const talkerReplicant = nodecg.Replicant<string[]>('talkerList', {
    defaultValue: initValue,
  });
  talkerReplicant.on('change', (value) => {
    console.log(`[UPDATED] value: ${value}`);
  });

  nodecg.listenFor('addTalker', (talker) => {
    const updated = [...talkerReplicant.value, talker];
    talkerReplicant.value = updated;
    console.log(`updated: ${updated}`);
  });
};
