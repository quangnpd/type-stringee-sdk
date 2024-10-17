declare class StringeeClient {
  constructor();
  connect(token: string): void;
  disconnect(): void;
  sendCustomMessage<T>(userId: string, data: T, callback: (status: boolean, code: number, message: string) => void): void;
}

declare enum InComingCallStatus {
  MAKE_CALL_SUCCESSFULLY = 0,
  ANSWER_URL_IS_EMPTY = 1,
  ANSWER_URL_SCCO_INCORRECT_FORMAT = 2,
  TO_TYPE_IS_NOT_INTERNAL_OR_EXTERNAL = 3,
  FROM_NUMBER_NOT_FOUND = 4,
  FROM_NUMBER_NOT_BELONG_YOUR_ACCOUNT = 5,
  SIP_TRUCK_NOT_FOUND = 6,
  SIP_TRUCK_NOT_BELONG_YOUR_ACCOUNT = 7,
  NOT_ENOUGH_MONEY = 8
}
declare interface InComingCallResponse {
  r: InComingCallStatus | number;
  [key: string]: any
}
declare type MakeCallCallback = (payload: InComingCallResponse) => void;

declare enum AnswerCallStatus {
  ANSWER_CALL_SUCCESSFULLY = 0,
  THE_CALL_IS_NOT_EXIST = 1,
  THE_CALL_WAS_CONTROLLED_FROM_OTHER_DEVICE = 2,
  CALL_DATA_IS_NOT_EXIST = 3,
}

declare interface AnswerCallResponse {
  r: AnswerCallStatus
}

declare type AnswerCallback = (payload: AnswerCallResponse) => void;

declare class StringeeCall {
  client: StringeeClient;
  fromNumber: string;
  toNumber: string;
  custom: string;
  customDataFromYourServer: string;
  fromAlias: string;
  toAlias: string;
  fromInternal: boolean;
  answeredOnAnotherDevice: boolean;
  isVideoCall: boolean;
  isIncomingCall: boolean;
  isAnswered: boolean;
  isOnHold: boolean;
  ended: boolean;
  callId: string;
  muted: boolean;
  localVideoEnabled: boolean;
  videoResolution: {width: number, height: number};

  constructor(client: StringeeClient, from: string, to: string, isVideoCall: boolean);

  makeCall(callback: MakeCallCallback): void

  answer(callback: AnswerCallback): void
}