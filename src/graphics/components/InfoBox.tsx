import React from 'react';
import { useReplicant } from '../../hooks';
import type { TalkInfo } from '../../types/schemas';

const InfoBox = () => {
  const [talkList] = useReplicant('talkList');
  const [currentIdx] = useReplicant('currentIdx');
  const talkInfo: TalkInfo =
    talkList !== undefined
      ? talkList[currentIdx ?? 0]
      : {
          name: 'Talker A',
          title: 'Sample Title',
        };

  return (
    <div className="absolute bottom-5 w-[1150px] bg-black/30 p-2">
      <div className="biz-udpmincho-regular flex items-end">
        <div className="mx-2 text-2xl text-gray-300">{talkInfo.name}</div>
        <div className="mx-3 text-4xl text-white">{talkInfo.title}</div>
      </div>
    </div>
  );
};

export default InfoBox;
