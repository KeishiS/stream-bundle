import type { TalkInfo } from './types/schemas';

export type ReplicantMap = {
  talkList: TalkInfo[];
  currentIdx: number;
};

export type MessageMap = {
  addTalkInfo: {
    data: TalkInfo;
  };
  prevIdx: object;
  nextIdx: object;
};

export const repDefaultValues: ReplicantMap = {
  talkList: [],
  currentIdx: 0,
};
