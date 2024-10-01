declare global {
  import type { NodecgInstance, NodecgConstructor } from './nodecg';

  let nodecg: NodecgInstance;
  let NodeCG: NodecgConstructor;
}
