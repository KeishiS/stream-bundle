export type ReplicantMap = {
  talkerList: string[];
};

export type MessageMap = {
  addTalker: {
    data: string;
  };
};

export const repDefaultValues: ReplicantMap = {
  talkerList: [],
};
