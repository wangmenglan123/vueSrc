import http from '../utils/request.js'
const getData = () =>{
  return http.get('/getData')
}
export default getData;