import axios from 'axios'

const api = axios.create({
  baseURL:"https://wcov-70df7.firebaseio.com/"
})

export default api