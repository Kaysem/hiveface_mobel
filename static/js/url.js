
const baseUrl1 = 'http://screenServer.umessage.com.cn/api/bigs'; //线上
const baseUrl2 =  'http://face.umessage.com.cn/api';
export default {
  "p_mem_realtime_buy": baseUrl1+"/p_mem_realtime_buy" , //到店记录
  // 顾客中心  详情
  "portrait" : baseUrl2+'/vipUserCenter/portrait', //顾客中心
  "orderDetail":  baseUrl2+'/vipUserCenter/orderDetail', // 小票
}
