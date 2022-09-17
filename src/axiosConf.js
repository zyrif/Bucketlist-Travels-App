import axios from 'axios'

export default axios.create({
  baseURL: 'https://bucketlist-api.tectronus.com',
  timeout: 3000
})

