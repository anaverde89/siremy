import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/anaverde89/siremy',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// const sendUserData = (data) => {
//   return axios
//     .post('http://localhost/siremy/api.php', data, {
//       'Content-Type': 'application/json',
//     })
//     .then((response) => response.data)
//     .then((response) => {
//       return { response: 'ok', info: response.response }
//     })
//     .catch((e) => {
//       return { response: 'error', info: e.message }
//     })
// }

// export default { sendUserData }

export default {
  sendUserData() {
    return apiClient.get('/users')
  },
  getUserData(id) {
    return apiClient.get('/users_details?idUserDetail=' + id)
  },
  getUserTitle(id) {
    return apiClient.get('/cargos?idCargo=' + id)
  },
}
