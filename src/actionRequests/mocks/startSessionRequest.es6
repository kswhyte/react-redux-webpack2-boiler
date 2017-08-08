/*eslint no-unused-vars: */

import actions from '../../actions/SessionActions';
import { URI } from '../../../tools/app_config';
import Moment from 'moment';

const startSessionRequest = (dispatch, ...args) => {
  const hostedUrlPath = URI.baseUISVC_URI;
  const postRoute = '/#fake';
  const startTime = Moment().format('L, h:mm:ss a');
  const createDate = Moment().format('l');
  const agent = {
    FirstName: 'John',
    LastName: 'Doe',
    UserId: 1,
    UserName: 'JohnDoe'
  };
  const postModel = {
    StartTime: startTime,
    CreateDate: createDate,
    ModifiedDate: createDate,
    UserId: agent.UserId,
    CreatedBy: agent.FirstName + agent.LastName,
    ModifiedBy: agent.UserName,
    CallNote: ''
  };

  const requestEnd = () => {
    const _res = {
      body: {
        message: 'Mocked Data'
      }
    };
    dispatch(actions.startSessionSuccess(_res.body));
    window.location.assign('/patientsearch/');
  };

  return { hostedUrlPath, postRoute, requestEnd, postModel };
};

export default startSessionRequest;
