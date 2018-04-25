import axios from 'axios'
import { endpoint } from '../../system/constants'
import { secretData } from '../../system/secret'

export default {
  getTracks (query) {
    const requestData = {
      params: {
        client_id: secretData.client_id,
        q: query,
        limit: 200
      }
    }
    return axios.get(endpoint + '/tracks', requestData)
  }
}
