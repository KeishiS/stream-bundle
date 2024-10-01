import type { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';
import type { ReplicantMap, MessageMap } from './maps';

export type NodecgInstance = CreateNodecgInstance<'stream-bundle', undefined, ReplicantMap, MessageMap>;
export type NodecgConstructor = CreateNodecgConstructor<'stream-bundle', undefined, ReplicantMap, MessageMap>;
