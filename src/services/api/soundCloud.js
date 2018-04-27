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
  },
  getStreamUrl (id) {
    const requestData = {
      params: {
        client_id: secretData.client_id
      }
    }
    return endpoint + '/tracks/' + id + '/stream' + '?client_id=' + requestData.params.client_id
  }
}
