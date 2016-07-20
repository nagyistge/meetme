export enum Answer {
  No = 0,
  Probably = 1,
  Yes = 2
}
export interface Person {
  id: number;
  hash: string;
  name: string;
  email: string;
}

export interface Participation {
  times: Date[];
  answers: Answer[];
}

export class Meeting {
  id: number;
  hash: string;
  title: string;
  author: string;
  email: string;
}
