import axios from 'axios'

import apis from './apis'

const ajax = axios.create({
  baseURL: apis.baseURL,

})



//在这里还有写一些拦截器的处理


export const getTodos = () => {
  return ajax.get(apis.todos)
}