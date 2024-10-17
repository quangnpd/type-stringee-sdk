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

interface CallResponse {
  r: number
}

type CallResponseCallback = (payload: CallResponse) => void

declare interface InComingCallResponse extends CallResponse {
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

declare interface AnswerCallResponse extends CallResponse {
  r: AnswerCallStatus
}

declare type AnswerCallback = (payload: AnswerCallResponse) => void;

declare enum RejectCallStatus {
  SUCCESSFULLY = 0,
  CALL_IS_NOT_EXIST = 1,
  ANSWERED_FROM_OTHER_DEVICE = 2,
  CALL_DATA_IS_NOT_EXIST = 3,
}
declare interface RejectCallResponse extends CallResponse {
  r: RejectCallStatus
}

declare type RejectCallback = (payload: RejectCallResponse) => void;

declare type RingingCallback = (payload: CallResponse) => void;

declare enum CALL_EVENT {
  MEDIA_STATE = 'mediastate',
  ADD_LOCAL_STREAM = 'addlocalstream',
  ERROR = 'error',
  ADD_REMOTE_STREAM = 'addremotestream',
  REMOVE_LOCAL_TRACK = 'removelocaltrack',
  REMOVE_REMOTE_TRACK = 'removeremotetrack',

  INFO = 'info',
  SIGNALING_STATE = 'signalingstate',
  ADD_LOCAL_TRACK = 'addlocaltrack',
  ADD_REMOTE_TRACK = 'addremotetrack',
  INCOMING_CALL = 'incomingcall',
  INCOMING_CALL_2 = 'incomingcall2',
  INCOMING_CHAT = 'incomingchat',
  INCOMING_CHAT_2 = 'incomingchat2',
  CHAT_MESSAGE_STATE = 'chatmessagestate',
  CHAT_MESSAGE_STATE_2 = 'chatmessagestate2',
  CHANGE_MESSAGE_STATE = 'changemessagestate',
  ADD_CHAT_MESSAGE = 'addchatmessage',
  RECEIVE_CHAT_REQUEST = 'receiveChatRequest',
  RECEIVE_TRANSFER_CHAT_REQUEST = 'receiveTransferChatRequest',
  CONNECT = 'connect',
  AUTHEN = 'authen',
  REQUEST_NEW_TOKEN = 'requestnewtoken',
  DISCONNECT = 'disconnect',
  CUSTOM_MESSAGE = 'custommessage',
  CHAT_MESSAGE = 'chatmessage',
  CHAT_MESSAGE_2 = 'chatmessage2',
  MESSAGE_FROM_TOPIC = 'messagefromtopic',
  TIMEOUT_IN_QUEUE = 'timeoutInQueue',
  TIMEOUT_ANSWER_CHAT = 'timeoutAnswerChat',
  PIN_MSG_FROM_SERVER = 'pinMsgFromServer',
  EDIT_MSG_FROM_SERVER = 'editMsgFromServer',
  REVOKE_MSG_FROM_SERVER = 'revokeMsgFromServer',
  REMOVE_PARTICIPANT_FROM_SERVER = 'removeParticipantFromServer',
  ADD_PARTICIPANT_FROM_SERVER = 'addParticipantFromServer',
  USER_BEGIN_TYPING_LISTENER = 'userBeginTypingListener',
  USER_END_TYPING_LISTENER = 'userEndTypingListener',
  UPDATE_USER_INFO_MSG = 'updateUserInfoMsg',
  CHAT_CONVERSATION_ATTACHMENT = 'chatConversationAttachment',
  CHAT_AGENT_RESPONSE = 'chatAgentResponse',
  CHAT_AGENT_RESPONSE_2 = 'chatAgentResponse2',
  CHAT_CONFIRM_TRANSFER_RESPONSE = 'chatConfirmTransferResponse',
  CHAT_CONFIRM_TRANSFER_RESPONSE2 = 'chatConfirmTransferResponse2',
  END_CHAT = 'endChat',
  CONVERSATION_ENDED = 'conversationEnded',
  TRANSFER_CHAT_REQUEST = 'transferChatRequest',
  TRANSFER_CHAT_REQUEST_2 = 'transferChatRequest2',
  LOAD_ALL_CHAT_MESSAGES = 'loadAllChatMessages',
  CALL_UPDATE_FROM_SERVER = 'callUpdateFromServer',
  OTHER_DEVICE_AUTHEN = 'otherdeviceauthen',
  OTHER_DEVICE = 'otherdevice',
}

declare class StringeeCall {
  client: StringeeClient
  fromNumber: string
  toNumber: string
  custom: string
  customDataFromYourServer: string
  fromAlias: string
  toAlias: string
  fromInternal: boolean
  answeredOnAnotherDevice: boolean
  isVideoCall: boolean
  isIncomingCall: boolean
  isAnswered: boolean
  isOnHold: boolean
  ended: boolean
  callId: string
  muted: boolean
  localVideoEnabled: boolean
  videoResolution: { width: number, height: number }

  constructor(client: StringeeClient, from: string, to: string, isVideoCall: boolean);

  makeCall(callback: MakeCallCallback): void

  answer(callback: AnswerCallback): void

  reject(callback: RejectCallback): void
  ringing(callback: RingingCallback): void
  hangup(callback: CallResponseCallback): void
  sendInfo(info: Record<string, any>, callback: CallResponseCallback): void
  sendDtmf(digit: string, callback: CallResponseCallback): void
  hold(): void
  unhold(): void
  sendTransfer(userId: string, callback: CallResponseCallback): void
  mute(enabled: boolean): void
  onRemove(): void
  enableLocalVideo(enabled: boolean): void
  on(eventName: string, callback: (payload: any) => void): void
  upgradeToVideoCall(): void
  switchCamera(): void
}