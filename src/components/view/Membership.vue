<!--  -->
<template>
  <!-- 第一个card -->
  <div id="Membership">
    <div class="card">
      <div class="perInfo_top" :data="vipInfo">
        <div class="memListHeadcss">
          <img :src="vipInfo.headImg" alt="" class="memListHead">
        </div>
        <div class="perInfo_top_right">
          <p>{{vipInfo.memName}} ( {{vipInfo.memPhone}} )</p>
          <p><span>年龄: {{vipInfo.age}}岁</span><span>生日: {{vipInfo.birthday}}(距今{{vipInfo.age}}天)</span></p>
          <p>上一次到店: {{vipInfo.last_visit_date}}(距今{{vipInfo.last_visit_date_diff}}天)</p>
        </div>
      </div>
      <!-- 评价 -->
      <div class="memAppraise" :data="RFMAnalyze">
        <div>
          <div  id="memAppraise_img">
            <h3>RFM评分 : {{RFMAnalyze.rfm}}</h3>
            <p>{{RFMAnalyze.one}}</p>
            <p>{{RFMAnalyze.two}}</p>
            <p>{{RFMAnalyze.three}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="perInfo_recommend" v-for="(item_fenye, recommendProducIndex) in recommendProduct.rec_product" :key="recommendProducIndex">
        <div class="perInfo_recommend_header" v-if="recommendProduct.rec_product.length>0 && recommendProducIndex==0" @click="SwitcSsection(recommendProducIndex)">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>1</span>
            <span>/</span>
            <span>2</span>
            <span><img src="../../assets/img/refresh.png" alt=""></span>
          </div>
        </div>
        <div class="perInfo_recommend_header" v-else-if="recommendProduct.rec_product.length>0 && recommendProducIndex == 2" @click="SwitcSsection(recommendProducIndex)">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>2</span>
            <span>/</span>
            <span>1</span>
            <span><img src="../../assets/img/refresh.png" alt=""></span>
          </div>
        </div>
        <div class="perInfo_recommend_header" v-else-if="recommendProduct.rec_product.length==1 && recommendProducIndex==0">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>1</span>
            <span>/</span>
            <span>0</span>
          </div>
        </div>
        <ul class="recommend1">
          <li v-for="(item, index) in item_fenye" :key="index" v-if="recommendProducIndex ==0" v-show="isrecommendShow">
            <span v-if="index == 0"><img src="..\..\assets\img\top1.png" alt=""></span>
            <span v-if="index == 1"><img src="..\..\assets\img\top2.png" alt=""></span>
            <span v-if="index == 2"><img src="..\..\assets\img\top3.png" alt=""></span>
            <span v-if="index >2">{{index +1}}</span>
            <span class="line_limit_length">{{item.name}}</span>
            <span>¥ {{item.price}}</span>
          </li>
          <li v-for="(item, index) in item_fenye" :key="index" v-if="recommendProducIndex ==1" v-show="!isrecommendShow">
            <span>{{index +6}}</span>
            <span class="line_limit_length">{{item.name}}</span>
            <span>¥ {{item.price}}</span>
          </li>
        </ul>
        <!-- <div class="recommend0">暂无数据</div> -->
      </div>
    </div>
    <div class="card">
      <div class="analyze_table">
        <div class="analyze_table_header">
          <h2>消费水平</h2>
        </div>
        <div>
          <span>
            <p>总消费</p>
            <p>5562.26</p>
          </span>
          <span>
            <p>平均消费</p>
            <p>556</p>
          </span>
        </div>
        <div>
          <span>
            <p>平均购买件数</p>
            <p>4件</p>
          </span>
          <span>
            <p>购买率</p>
            <p>56%</p>
          </span>
        </div>
        <div>
          <span>
            <p>上次购买最贵商品</p>
            <p>1938</p>
          </span>
          <span>
            <p>历史购买最贵商品</p>
            <p>2938</p>
          </span>
        </div>
      </div>
    </div>
    <!-- 最常购买Echarts -->
    <div class="card">
      <div class="analyze_table_header">
          <h2>最常购买(TOP5)</h2>
      </div>
      <div class="topBuyEcharts">
        <div id="topBuyEcharts"></div>
      </div>
    </div>
    <!-- 消费小票 -->
    <div class="xiaopiao_card">
      <div class="analyze_table_header">
        <h2>购买清单</h2>
      </div>
      <div class="xiaopiao">
        <div class="xiaopiao_top">
          <span>店号: 10113</span>
          <span>机号: 3480</span>
          <span>收银员: 1799</span>
          <span>日期: 2018-05-29</span>
          <span>流水号: 394823847595</span>
        </div>
        <div class="receipt_table">
          <div class="receipt_table_header">
            <span>商品名</span>
            <span>单价</span>
          </div>
          <div class="receipt_table_body">
            <span>克丽丝汀迪奥凝脂恒久气垫粉底010 （限量版）SPF40PA++</span>
            <span>¥ 5998</span>
          </div>
        </div>
        <div class="receipt_total">
          <p>订单金额: ¥ 100000000</p>
          <p>实际支付: ¥ 500000000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Membership',
  components: {},
  props: {},
  data () {
    return {
      index: '',
      recommendProduct: {}, // 推荐商品
      vipInfo: {}, // vip个人信息
      RFMAnalyze: {}, // RFM评价
      userBuyThings: {}, // 消费水平
      // recProducIndex : 0, // 推荐商品显示index
      // 常购买商品echarts
      isrecommendShow: true,
      topBuyEcharts: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '7%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: { // 坐标轴字体样式
            show: true,
            textStyle: {
              color: '#707070'
            }
          },
          axisLine: { // 坐标轴线样式
            lineStyle: {
              type: 'solid',
              color: '#707070', // 坐标轴线的颜色
              width: '1'// 坐标线的宽度
            }
          }
        },
        yAxis: {
          type: 'category',
          axisTick: { // 隐藏y轴刻度线
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#707070'
            }
          },
          axisLine: { // 坐标轴线样式
            lineStyle: {
              type: 'solid',
              color: '#707070', // 坐标轴线的颜色
              width: '1'// 坐标线的宽度
            }
          },
          data: []
        },
        series: {
          name: '共购买件数',
          type: 'bar',
          // 设置柱子的宽度
          barWidth: 20,
          // 配置样式
          itemStyle: {
            // 通常情况下：
            normal: {
              // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                var colorList = ['#EE7942', 'rgb(164,205,238)', 'rgb(42,170,227)', '#FF4040', 'rgb(25,46,94)', 'rgb(195,229,235)'];
                return colorList[params.dataIndex];
                // return '#628df6';
              },
              barBorderRadius: 40
            },
            // 鼠标悬停时：
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.05)'
            }
          },
          data: []
        }
      }
    };
  },
  created () {},
  mounted () {
    let _this = this;
    _this.drawEcharts();
    _this.vipInfoSearch();
  },
  watch: {},
  computed: {},
  methods: {
    drawEcharts () {
      let _this = this;
      _this.myEcharts = _this.$echarts.init(document.getElementById('topBuyEcharts'));
      _this.myEcharts.setOption(_this.topBuyEcharts);
      window.addEventListener('resize', function () {
        _this.myEcharts.resize();
      });
    },
    // 发送请求 查询会员信息
    vipInfoSearch () {
      let _this = this;
      let realmemNo = _this.$route.params.realmemNo;
      let json = {
        vipID: realmemNo
        // start_time: '2018-05-15',
        // end_time: '2018-12-05'
      };
      console.log(realmemNo);
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.portrait, formdata)
        .then(res => {
          if (res.status === 200) {
            console.log(res);
            let data = res.data.data;
            // 先清空再赋值 start
            _this.recommendProduct = {};
            _this.vipInfo = {};
            _this.RFMAnalyze = {};
            _this.userBuyThings = {};
            if (data.recommendProduct.rec_product.length !== 0 && data.recommendProduct.rec_product[0].length !== 0) {
              _this.recommendProduct = data.recommendProduct;
              _this.is_recommendProduct = false;
            } else {
              _this.is_recommendProduct = true;
            }
            _this.vipInfo = data.vipInfo;
            _this.RFMAnalyze = data.RFMAnalyze;
            _this.userBuyThings = data.userBuyThings;

            // 常购买商品echarts
            _this.topBuyEcharts.xAxis.data = [];
            _this.topBuyEcharts.series.data = [];
            for (let i = 0; i < data.usedBuyProduct.length; i++) {
              let favItemName = data.usedBuyProduct[i].fav_itemName;
              let cnt = data.usedBuyProduct[i].cnt;
              _this.topBuyEcharts.yAxis.data.push(favItemName);
              _this.topBuyEcharts.series.data.push(cnt);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
              // _this.mousedown();
            });
          }
        }).catch(err => {
          console.log('异常:', err);
        });

      // 发送请求 E
    },

    // 点击右上角图标 切换商品推荐页
    SwitcSsection (recommendProducIndex) {
      let _this = this;
      console.log(recommendProducIndex);
      _this.isrecommendShow = false;
    }

    // 点击顾客消费echarts查询当天小票
    // mousedown () {
    //   let _this = this;
    //   //  清空缓存数据
    //   // _this.saleOrderDetail = {};
    //   console.log(_this.chart_power.xAxis.data[_this.chart_power.xAxis.data.length - 1]);
    //   if (_this.chart_power.xAxis.data == []) {
    //     _this.is_saleOrderDetail = true;
    //   } else if (XdataName == '' && _this.chart_power.xAxis.data.length != 0) {
    //     _this.is_saleOrderDetail = false;
    //     XdataName = _this.chart_power.xAxis.data[_this.chart_power.xAxis.data.length - 1];
    //   } else if (XdataName != '' && _this.chart_power.xAxis.data.length != 0) {
    //     _this.is_saleOrderDetail = false;
    //   } else {
    //     _this.is_saleOrderDetail = true;
    //   }
    //   console.log('索引', XdataName);
    //   let json = {
    //     vipID: _this.USinput,
    //     orderDate: XdataName
    //   };
    //   let formdata = _this.$config.formData(json);
    //   // 发送请求  S
    //   _this.$axios
    //     .post(_this.$url.orderDetail, formdata)
    //     .then(res => {
    //       console.log('852', res);
    //       if (res.status === 200) {
    //         console.log(res);
    //         let data = res.data.data;
    //         _this.saleOrderDetail = {};
    //         _this.saleOrderDetail = data.saleOrderDetail;
    //       }
    //       XdataName = '';
    //     }).catch(err => {
    //       console.log('异常:', err);
    //       _this.is_saleOrderDetail = true;
    //     });
    // }
  }
};
</script>
<style scoped>
#Membership  {
  width: 100%;
  height: 100%;
  padding: 0.3rem 0 0.3rem 0;
  background-color: #f5f5f5;
  color: #000;
}
div,span,ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.card {
  width: 100%;
  background-color: #fff;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}
p {
  margin: 6px 0;
}
h1,h2,h3,h4 {
  margin: 0;
  padding: 0;
}
.memListHeadcss{
  width: 15%;
  float: left;
  height: 100%;
  margin: 10px 10px;
}
.memListHead {
  width: 100%;
  border-radius: 50%;
  position: relative;
  top: 50%; /*偏移*/
  /* margin-top: -50%; */
}
.perInfo_top_right {
  font-size: 14px;
  width: 78%;
  height: 100%;
  clear: both;
  display: inline-block;
}
.perInfo_top_right p{
  margin: 15px 0 0 0;
}
.perInfo_top_right>p:nth-child(1) {
  color: #000000;
  font-weight: 700;
  margin-top: 25px;
}
.perInfo_top_right>p:nth-child(2),.perInfo_top_right>p:nth-child(3) {
  color: #444444;
  opacity: 0.9;
  font-weight: 700;
}
.perInfo_top_right>p:nth-child(2)>span:nth-child(2) {
  margin-left: 25px;
}
.memAppraise {
  width: 100%;
  height: 150px;
  max-height: 250px;
  margin-top: 3%;
  display: inline-flex;
  flex-direction: column;
  justify-content:center;
}
.memAppraise>div:nth-child(1) {
  margin: 0 auto;
  width: 95%;
  height: 100%;
  background: url('../../assets/img/bj.png') no-repeat;
  background-size:100% 90%;
  color: #fff;
}
#memAppraise_img {
  margin: 4% 2% 2% 6%;
  text-align: left;
}

.recommend1 {
  margin: 10px auto;
  font-size: 14px;
  text-align: center;
}
.perInfo_recommend {
  padding: 5px 15px;
}
.recommend1 img {
  width: 20px;
  float: left;
}
.recommend1 li {
  line-height: 30px;
}
.recommend1 li>span:nth-child(1) {
  float: left;
}
.line_limit_length {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommend1 li>span:nth-child(3) {
  float: right;
}
.recommend1 li:nth-child(3)>span:nth-child(1),.recommend1 li:nth-child(4)>span:nth-child(1),.recommend1 li:nth-child(5)>span:nth-child(1){
  width: 22px;
  font-size: 18px;
  text-align: center;
  color: #999999;
}
.perInfo_recommend_header {
  height: 40px;
  line-height: 40px;
}
.perInfo_recommend_header_right {
  float: right;
}
.perInfo_recommend_header h2 {
  float: left;
}
.perInfo_recommend_header_right span:nth-child(4){
  vertical-align: middle;
}
.perInfo_recommend_header_right span:nth-child(4)>img {
  width: 20px;
  height: 20px;
  margin-top: 8px;
}
.perInfo_recommend_header_right span:nth-child(1) {
  font-size: 18px;
}
.analyze_table {
  width: 100%;
  padding: 5px 0 25px 0;
}
.analyze_table_header {
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}
/* .analyze_table th {
  float: left;
  font-size: 18px;
} */
.analyze_table div {
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
}
.analyze_table div:nth-child(1) {
  border: none;
}
.analyze_table span {
  /* text-align: center; */
  width: 43%;
  height: 70px;
  padding-left:20px;
  display: inline-block;
}
.analyze_table div:nth-child(2){
  border-top: 1px solid #dcdcdc;
}
.analyze_table div>span:nth-child(1) {
  border-right: 0.5px solid #dcdcdc;
  border-collapse: collapse
}
.analyze_table span>p:nth-child(1) {
  color: #707070;
  font-weight: 700;
}
.analyze_table span>p:nth-child(2) {
  color: #000000;
  font-weight: 700;
  font-size: 20px;
}
.topBuyEcharts {
  width: 100%;
  height: 270px;
}
#topBuyEcharts {
  width: 100%;
  height: 100%;
}
.xiaopiao_card {
  width: 100%;
  background-color: #fff;
}
.xiaopiao {
  width: 100%;
  background-color: #fff;
  box-shadow: 0.05rem 0.05rem 0.25rem rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  padding: 5px auto;
  font-size: 15px;
}
.xiaopiao_top {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.xiaopiao_top span {
  display: inline-table;
  margin: 10px 15px;
  /* font-size: 16px; */
}
.receipt_table {
  width: 100%;
  /* margin: 0 auto; */
  text-align: center;
}
.receipt_table_header {
  width: 100%;
}
.receipt_table_header span{
  display: inline-table;
  height: 30px;
  line-height: 30px;
  background-color: #d9e3fb;
}
.receipt_table_header span:nth-child(1){
  width: 75%;
}
.receipt_table_header span:nth-child(2){
  width: 20%;
}
.receipt_table_body span{
  height: 40px;
  line-height: 40px;
  background-color: #f5f5f5;
}
.receipt_table_body span:nth-child(1){
  width: 74%;
  display: inline-block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  padding: 0 0.5%;
}
.receipt_table_body span:nth-child(2){
  width: 20%;
  display: inline-block;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.receipt_total {
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  text-align: right;
}
.receipt_total p {
  margin-right: 15px;
}
</style>
