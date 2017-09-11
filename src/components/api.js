
import axios from 'axios'
const api='https://zhihu-daily.leanapp.cn/api/v1'
var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  };
export const getSystemConfig=()=>{
    return axios.get(api+'/themes')
}

