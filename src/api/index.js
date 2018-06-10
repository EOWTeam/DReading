import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

var base = 'http://localhost';

export const transfer = params => { return axios.post(`${base}/lists`, params).then(res => res.data); };

