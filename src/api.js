import axios from 'axios'

const sendUserData = (data) => {
  return axios
    .post('http://localhost/siremy/api.php', data, {
      'Content-Type': 'application/json',
    })
    .then((response) => response.data)
    .then((response) => {
      return { response: 'ok', info: response.response }
    })
    .catch((e) => {
      return { response: 'error', info: e.message }
    })
}

export default { sendUserData }
