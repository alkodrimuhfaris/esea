import qs from 'qs';
import services from '../../Helpers/services';

export default {
  startSession: (ipData, startSession) => ({
    type: 'START_SESSION',
    payload: services().post(
      'visitors/start',
      qs.stringify({...ipData, startSession}),
    ),
  }),
  endSession: (ipData, endSession, id, uuid) => ({
    type: 'END_SESSION',
    payload: services().post(
      'visitors/end',
      qs.stringify({...ipData, endSession, id, uuid}),
    ),
  }),
};
