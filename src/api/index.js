import http from '../utils/http'
export const LOGIN =  (data)=>http({url:'/login',data:data})
export const REGISTER = (data)=>http({url:'/register',data:data})
