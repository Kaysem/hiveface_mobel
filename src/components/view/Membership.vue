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
          <p><span>年龄: {{vipInfo.age}}岁</span><span>生日: {{vipInfo.birthday}}(还有{{vipInfo.birthDayDiff}}天)</span></p>
          <p>最近到店: {{vipInfo.last_visit_date}}(距今{{vipInfo.last_visit_date_diff}}天)</p>
        </div>
      </div>
      <!-- 评价 -->
      <div class="memAppraise" :data="RFMAnalyze">
        <div>
          <div  id="memAppraise_img">
            <h3>RFM评分 : {{RFMAnalyze.rfm}}</h3>
            <div class="beizhu">
              <!-- v-if="iconBeizhu" -->
              <p v-if="iconBeizhu" class="beizhu_info">备注:强＞一般＞弱水电费</p>
              <img src="../../assets/img/beizhu.png" alt="" class="icon_beizhu" @click="isTuijianIcon()">
            </div>
            <p>{{RFMAnalyze.one}}</p>
            <p>{{RFMAnalyze.two}}</p>
            <p>{{RFMAnalyze.three}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div v-if="isrecommendShow0">
        <div class="perInfo_recommend_header" v-if="isrecommendShow" @click="SwitcSsection()">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>1</span>
            <span>/</span>
            <span>2</span>
            <span><img src="../../assets/img/refresh.png" alt=""></span>
          </div>
        </div>
        <div class="perInfo_recommend_header" v-else @click="SwitcSsection()">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>2</span>
            <span>/</span>
            <span>1</span>
            <span><img src="../../assets/img/refresh.png" alt=""></span>
          </div>
        </div>
      </div>
      <div class="perInfo_recommend_header" v-if="!isrecommendShow0">
        <h2>推荐商品</h2>
        <div class="perInfo_recommend_header_right">
          <span>1</span>
          <span>/</span>
          <span>0</span>
        </div>
      </div>
      <div class="perInfo_recommend" v-for="(item_fenye, recommendProducIndex) in recommendProduct.rec_product" :key="recommendProducIndex">
        <ul class="recommend1" v-if="isShopTuijian">
          <li v-for="(item, index) in item_fenye" :key="index" v-if="recommendProducIndex ===0 && isrecommendShow">
            <span v-if="index == 0"><img src="..\..\assets\img\top1.png" alt=""></span>
            <span v-if="index == 1"><img src="..\..\assets\img\top2.png" alt=""></span>
            <span v-if="index == 2"><img src="..\..\assets\img\top3.png" alt=""></span>
            <span v-if="index >2">{{index +1}}</span>
            <span class="line_limit_length">{{item.name}}</span>
            <span>¥ {{item.price}}</span>
          </li>
          <li v-for="(item, index) in item_fenye" :key="index" v-if="recommendProducIndex ===1 &&!isrecommendShow">
            <span>{{index +6}}</span>
            <span class="line_limit_length">{{item.name}}</span>
            <span>¥ {{item.price}}</span>
          </li>
        </ul>
        <div class="recommend1" v-if="!isShopTuijian">暂无更多推荐商品</div>
      </div>
    </div>
    <div class="card">
      <div class="analyze_table" :data="saleLevelDetail">
        <div class="analyze_table_header">
          <h2>消费水平</h2>
        </div>
        <div>
          <span>
            <p>总消费</p>
            <p>¥ {{saleLevelDetail.pay_sum}}</p>
          </span>
          <span>
            <p>平均消费</p>
            <p>¥ {{saleLevelDetail.pay_sum_per}}</p>
          </span>
        </div>
        <div>
          <span>
            <p>平均购买件数</p>
            <p>{{saleLevelDetail.skumun_cnt_per}}件</p>
          </span>
          <span>
            <p>购买率</p>
            <p>{{saleLevelDetail.purchase_rate}}</p>
          </span>
        </div>
        <div>
          <span>
            <p>上次购买最贵商品</p>
            <p>¥ {{saleLevelDetail.last_expensive_item}}</p>
          </span>
          <span>
            <p>历史购买最贵商品</p>
            <p>¥ {{saleLevelDetail.expensive_item}}</p>
          </span>
        </div>
      </div>
    </div>
    <!-- 最常购买Echarts -->
    <div class="card">
      <div class="analyze_table_header">
          <h2>最常购买商品(TOP5)</h2>
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
      <div class="xiaopiao" v-for="(itemSaleOrderDetail, indexSaleOrderDetail) in saleOrderDetail" :key="indexSaleOrderDetail">
        <div class="xiaopiao_top">
          <span>店号: {{itemSaleOrderDetail.orderStore}}</span>
          <span>机号: {{itemSaleOrderDetail.posCode}}</span>
          <span>收银员: {{itemSaleOrderDetail.cashier}}</span>
          <span>日期: {{itemSaleOrderDetail.detailDate}}</span>
          <span>流水号: {{itemSaleOrderDetail.orderNo}}</span>
        </div>
        <div class="receipt_table">
          <div class="receipt_table_header">
            <span>商品名</span>
            <span>单价</span>
          </div>
          <div class="receipt_table_body" v-for="(item, index) in itemSaleOrderDetail.productList" :key="index">
            <span>{{item.skuName}}</span>
            <span>¥ {{item.realPrice}}</span>
          </div>
        </div>
        <div class="receipt_total">
          <p>订单金额: ¥ {{itemSaleOrderDetail.orderAmount}}</p>
          <p>实际支付: ¥ {{itemSaleOrderDetail.realPayAmount}}</p>
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
      realmemNo: {}, // 保存会员iD
      index: '',
      recommendProduct: {}, // 推荐商品
      vipInfo: {}, // vip个人信息
      RFMAnalyze: {}, // RFM评价
      saleLevelDetail: {}, // 消费水平
      // recProducIndex : 0, // 推荐商品显示index
      // 常购买商品echarts
      isrecommendShow0: true, // 根据有一页或者多页判断显示的商品推荐右上角
      isrecommendShow: true,
      isShopTuijian: true,
      saleOrderDetail: {}, // 小票信息
      iconBeizhu: false, // 提示信息
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
          name: '单位:(件)',
          nameLocation: 'center',
          nameGap: '25',
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
            show: false,
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
  beforeMount () {
    let _this = this;
    _this.realmemNo = _this.$route.params.realmemNo;
  },
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
      let json = {
        vipID: _this.realmemNo
        // start_time: '2018-05-15',
        // end_time: '2018-12-05'
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.portrait, formdata)
        .then(res => {
          if (res.status === 200) {
            let data = res.data.data;
            // 先清空再赋值 start
            _this.recommendProduct = {};
            _this.vipInfo = {};
            _this.RFMAnalyze = {};
            _this.saleLevelDetail = {};
            if (data.recommendProduct.rec_product.length !== 0 && data.recommendProduct.rec_product[0].length !== 0) {
              _this.recommendProduct = data.recommendProduct;
              _this.is_recommendProduct = false;
            } else {
              _this.is_recommendProduct = true;
            }
            _this.vipInfo = data.vipInfo;
            _this.RFMAnalyze = data.RFMAnalyze;
            _this.saleLevelDetail = data.saleLevelDetail;

            // 常购买商品echarts
            _this.topBuyEcharts.xAxis.data = [];
            _this.topBuyEcharts.series.data = [];
            for (let i = 0; i < data.usedBuyProduct.length; i++) {
              let favItemName = data.usedBuyProduct[i].fav_itemName;
              let cnt = data.usedBuyProduct[i].cnt;
              _this.topBuyEcharts.yAxis.data.unshift(favItemName);
              _this.topBuyEcharts.series.data.unshift(cnt);
            }
            _this.$nextTick(() => {
              _this.drawEcharts();
              _this.mousedown();
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
      if (_this.recommendProduct.rec_product.length !== 0 || _this.recommendProduct.rec_product[0].length !== 0) {
        _this.isrecommendShow = !_this.isrecommendShow;
        if (_this.recommendProduct.rec_product.length === 1) {
          _this.isrecommendShow0 = !_this.isrecommendShow0;
        }
      } else {
        _this.isShopTuijian = !_this.isShopTuijian;
      }
    },

    // 点击顾客消费echarts查询当天小票
    mousedown () {
      let _this = this;
      //  清空缓存数据
      _this.saleOrderDetail = {};
      let json = {
        vipID: _this.realmemNo
      };
      let formdata = _this.$config.formData(json);
      // 发送请求  S
      _this.$axios
        .post(_this.$url.orderDetail, formdata)
        .then(res => {
          if (res.status === 200) {
            let data = res.data.data;
            _this.saleOrderDetail = {};
            _this.saleOrderDetail = data.saleOrderDetail;
          }
        }).catch(err => {
          console.log('异常:', err);
          _this.is_saleOrderDetail = true;
        });
    },
    isTuijianIcon () {
      let _this = this;
      _this.iconBeizhu = !_this.iconBeizhu;
      if (_this.iconBeizhu) {
        let timer = setTimeout(function () {
          _this.iconBeizhu = false;
          clearTimeout(timer);
        }, 2000);
      }
    }
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
  width: 17%;
  float: left;
  height: 100%;
  margin: 10px 10px 0 5px;
}
.memListHead {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  top: 50%; /*偏移*/
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
  font-size: 12px;
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
.beizhu_info {
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  border-radius: 30px;
  position: absolute;
  top: 20px;
  left: -28px;
}
#memAppraise_img {
  margin: 4% 2% 2% 6%;
  text-align: left;
}
#memAppraise_img .beizhu {
  display: inline-block;
  margin-left: 5px;
  height: 14px;
  position: relative;
}
#memAppraise_img h3 {
  display: inline-block;
}
.recommend1 {
  margin: 10px auto;
  font-size: 14px;
  text-align: center;
}
.recommend1 img {
  width: 20px;
  float: left;
}
.recommend1 li {
  line-height: 30px;
  padding: 5px 15px;
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
.recommend1 li>span:nth-child(1){
  width: 22px;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  color: #999999;
}
.perInfo_recommend_header {
  height: 40px;
  line-height: 40px;
  margin: 10px 15px 0 15px;
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
.analyze_table div {
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
}
.analyze_table div:nth-child(1) {
  border: none;
}
.analyze_table span {
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
  height: 280px;
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
}
.receipt_table {
  width: 100%;
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
