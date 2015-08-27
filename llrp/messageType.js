'use strict';

/**
 * Gets the message type using the encoded Buffer.
 *
 * @param  {Buffer} data
 * @return {int}    corresponding message type code.
 */
function getCode(data) {

  // message type resides on the first 2 bits of the first octet
  // and 8 bits of the second octet.
  return (data[0] & 3) << 8 | data[1];

}

/**
 * Gets the message type using the encoded Buffer.
 *
 * @param  {Buffer} data
 * @return {string}    corresponding message type string.
 */
function getString(data) {

  // message type resides on the first 2 bits of the first octet
  // and 8 bits of the second octet.
  var messageType = getCode(data);

  switch (messageType) {
    case 1:
      return 'GET_READER_CAPABILITIES';
    case 2:
      return 'GET_READER_CONFIG';
    case 3:
      return 'SET_READER_CONFIG';
    case 4:
      return 'CLOSE_CONNECTION_RESPONSE';
    case 11:
      return 'GET_READER_CAPABILITIES_RESPONSE';
    case 12:
      return 'GET_READER_CONFIG_RESPONSE';
    case 13:
      return 'SET_READER_CONFIG_RESPONSE';
    case 14:
      return 'CLOSE_CONNECTION';
    case 20:
      return 'ADD_ROSPEC';
    case 21:
      return 'DELETE_ROSPEC';
    case 22:
      return 'START_ROSPEC';
    case 23:
      return 'STOP_ROSPEC';
    case 24:
      return 'ENABLE_ROSPEC';
    case 25:
      return 'DISABLE_ROSPEC';
    case 26:
      return 'GET_ROSPECS';
    case 30:
      return 'ADD_ROSPEC_RESPONSE';
    case 31:
      return 'DELETE_ROSPEC_RESPONSE';
    case 32:
      return 'START_ROSPEC_RESPONSE';
    case 33:
      return 'STOP_ROSPEC_RESPONSE';
    case 34:
      return 'ENABLE_ROSPEC_RESPONSE';
    case 35:
      return 'DISABLE_ROSPEC_RESPONSE';
    case 36:
      return 'GET_ROSPECS_RESPONSE';
    case 40:
      return 'ADD_ACCESSSPEC';
    case 41:
      return 'DELETE_ACCESSSPEC';
    case 42:
      return 'ENABLE_ACCESSSPEC';
    case 43:
      return 'DISABLE_ACCESSSPEC';
    case 44:
      return 'GET_ACCESSSPECS';
    case 45:
      return 'CLIENT_REQUEST_OP';
    case 46:
      return 'GET_SUPPORTED_VERSION';
    case 47:
      return 'SET_PROTOCOL_VERSION';
    case 50:
      return 'ADD_ACCESSSPEC_RESPONSE';
    case 51:
      return 'DELETE_ACCESSSPEC_RESPONSE';
    case 52:
      return 'ENABLE_ACCESSSPEC_RESPONSE';
    case 53:
      return 'DISABLE_ACCESSSPEC_RESPONSE';
    case 54:
      return 'GET_ACCESSSPECS_RESPONSE';
    case 55:
      return 'CLIENT_REQUEST_OP_RESPONSE';
    case 56:
      return 'GET_SUPPORTED_VERSION_RESPONSE';
    case 57:
      return 'SET_PROTOCOL_VERSION_RESPONSE';
    case 60:
      return 'GET_REPORT';
    case 61:
      return 'RO_ACCESS_REPORT';
    case 62:
      return 'KEEPALIVE';
    case 63:
      return 'READER_EVENT_NOTIFICATION';
    case 64:
      return 'ENABLE_EVENTS_AND_REPORTS';
    case 72:
      return 'KEEPALIVE_ACK';
    case 100:
      return 'ERROR_MESSAGE';
    case 1023:
      return 'CUSTOM_MESSAGE';
    default:
      return null;
  }

}

module.exports = {
  getCode: getCode,
  getString: getString
};
