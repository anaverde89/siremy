import axios from 'axios'

const sendUserData = (data) => {
  return axios
    .post('http://localhost/siremy/api.php', data, {
      'Content-Type': 'application/json',
    })
    .then((response) => {
      return response.data
    })
    .then((response) => response.response)
    .catch((e) => {
      console.log(e.message)
    })
}

export default { sendUserData }
