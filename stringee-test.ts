const client: StringeeClient = new StringeeClient()
client.connect("")
client.disconnect()
client.sendCustomMessage("", {}, (status: boolean, code: number, message: string) => {
    console.log(status, code, message)
})

const callInstance: StringeeCall = new StringeeCall(client, 'from', 'to', true)
function validateCallInstance() {
    if (callInstance.client === client) {
        console.log('client is valid')
    }
    if (callInstance.isVideoCall) {
        console.log('This call is video call')
    }
    if (callInstance.isIncomingCall) {
        console.log('This call is incoming call')
    }
    if (callInstance.isAnswered) {
        console.log('This call is answered')
    }
    if (callInstance.isOnHold) {
        console.log('This call is on hold')
    }
    if (callInstance.ended) {
        console.log('This call was ended')
    }
    if (callInstance.muted) {
        console.log('This call was muted')
    }
    if (callInstance.localVideoEnabled) {
        console.log('Local video is enabled')
    }
    if (callInstance.videoResolution) {
        console.log('Video resolution', callInstance.videoResolution)
    }
    if (callInstance.fromNumber) {
        console.log('From number', callInstance.fromNumber)
    }
    if (callInstance.toNumber) {
        console.log('To number', callInstance.toNumber)
    }
    if (callInstance.custom) {
        console.log('Custom client data', callInstance.custom)
    }
    if (callInstance.customDataFromYourServer) {
        console.log('Custom data from your server', callInstance.customDataFromYourServer)
    }
    if (callInstance.fromAlias) {
        console.log('From alias', callInstance.fromAlias)
    }
    if (callInstance.toAlias) {
        console.log('To alias', callInstance.toAlias)
    }
    if (callInstance.fromInternal) {
        console.log('This call was from internal')
    }
    if (callInstance.answeredOnAnotherDevice) {
        console.log('This call was answered on another device')
    }
    if (callInstance.callId) {
        console.log('Call ID:', callInstance.callId)
    }
}
callInstance.makeCall((payload: InComingCallResponse) => {
  switch (payload.r) {
      case InComingCallStatus.MAKE_CALL_SUCCESSFULLY:
          // do something
          break;
      case InComingCallStatus.ANSWER_URL_IS_EMPTY:
          // do something
          break;
      case InComingCallStatus.ANSWER_URL_SCCO_INCORRECT_FORMAT:
          // do something
          break;
      case InComingCallStatus.TO_TYPE_IS_NOT_INTERNAL_OR_EXTERNAL:
          // do something
          break;
      case InComingCallStatus.FROM_NUMBER_NOT_FOUND:
          // do something
          break;
      case InComingCallStatus.FROM_NUMBER_NOT_BELONG_YOUR_ACCOUNT:
          // do something
          break;
      case InComingCallStatus.SIP_TRUCK_NOT_FOUND:
          // do something
          break;
      case InComingCallStatus.SIP_TRUCK_NOT_BELONG_YOUR_ACCOUNT:
          // do something
          break;
      case InComingCallStatus.NOT_ENOUGH_MONEY:
          // do something
          break;
      default:
          // do something
          break;
  }
})
callInstance.answer((payload: AnswerCallResponse) => {
    switch (payload.r) {
        case AnswerCallStatus.ANSWER_CALL_SUCCESSFULLY:
            // do something
            break;
        case AnswerCallStatus.THE_CALL_IS_NOT_EXIST:
            // do something
            break;
        case AnswerCallStatus.THE_CALL_WAS_CONTROLLED_FROM_OTHER_DEVICE:
            // do something
            break;
        case AnswerCallStatus.CALL_DATA_IS_NOT_EXIST:
            // do something
            break;
        default:
            // do something
            break;
    }
})