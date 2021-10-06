import Axios from 'axios';
import {showMessage} from 'react-native-flash-message';

export const baseURL = 'http://api.themoviedb.org/3/';

const AxiosCall = async (callObj, dispatch) => {
  const {path, method, data, contentType} = callObj;

  let url = `${baseURL}/${path}`;

  try {
    const response = await Axios({method, url, data, headers, json: true});
    const result = response && response.data;
    return result;
  } catch (error) {
    if (error.response.status == 404) {
      showMessage({
        message: 'Transaction cancelled',
        description: 'Transaction cancelled',
        type: 'danger',
        color: '#ffffff', // text color
      });
    }
    throw error;
  }
};

export default AxiosCall;
