<!--  -->
<template>
  <!-- 第一个card -->
  <div id="Membership">
    <div class="card">
      <div class="perInfo_top">
        <div class="memListHeadcss">
          <img src="../../assets/img/touxiang.jpg" alt="" class="memListHead">
        </div>
        <div class="perInfo_top_right">
          <p>刘先生 (13948573899)</p>
          <p><span>年龄: 25岁</span><span>生日: 12-22(距今28天)</span></p>
          <p>最后一次到店: 2018-09-12(距今28天)</p>
        </div>
      </div>
      <!-- 评价 -->
      <div class="memAppraise">
        <div>
          <div  id="memAppraise_img">
            <h3>评价</h3>
            <p>活跃度高、消费能力强、忠诚度高</p>
            <p>属于高价值客户，对产品及服务要求高</p>
            <p>需要重点提升优质服务</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="perInfo_recommend">
        <div class="perInfo_recommend_header">
          <h2>推荐商品</h2>
          <div class="perInfo_recommend_header_right">
            <span>1</span>
            <span>/</span>
            <span>2</span>
            <span><img src="../../assets/img/refresh.png" alt=""></span>
          </div>
        </div>
        <ul class="recommend1">
          <li>
            <span><img src="..\..\assets\img\top1.png" alt=""></span>
            <span class="line_limit_length">伊丽莎白雅顿伊丽莎白雅顿伊丽莎白雅顿顿伊丽莎白雅顿</span>
            <span>¥ 360</span>
          </li>
          <li>
              <span><img src="..\..\assets\img\top2.png" alt=""></span>
              <span class="line_limit_length">SK-II微肌因修护幻彩......</span>
              <span>¥ 590</span></li>
          <li>
            <span><img src="..\..\assets\img\top3.png" alt=""></span>
            <span class="line_limit_length">SK-II微肌因修护幻彩......</span>
            <span>¥ 590</span>
          </li>
          <li>
            <span>4</span>
            <span class="line_limit_length">SK-II微肌因修护幻彩......</span>
            <span>¥ 456</span>
          </li>
          <li>
            <span>5</span>
            <span class="line_limit_length">SK-II微肌因修护幻彩......</span>
            <span>¥ 456</span>
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
  </div>
</template>

<script>
export default {
  name: 'Membership',
  components: {},
  props: {},
  data () {
    return {
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
              color: '#999999'
            }
          },
          axisLine: { // 坐标轴线样式
            lineStyle: {
              type: 'solid',
              color: '#999999', // 坐标轴线的颜色
              width: '2'// 坐标线的宽度
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
              color: '#999999'
            }
          },
          axisLine: { // 坐标轴线样式
            lineStyle: {
              type: 'solid',
              color: '#999999', // 坐标轴线的颜色
              width: '2'// 坐标线的宽度
            }
          },
          data: ['化妆棉', '棉签', '爽肤水', '口红', '香水']
        },
        series: [
          {
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
            data: [182, 231, 291, 104, 131]
          }
        ]
      }
    };
  },
  created () {},
  mounted () {
    let _this = this;
    _this.drawEcharts();
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
  margin: 20px auto;
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
  height: 300px;
}
#topBuyEcharts {
  width: 100%;
  height: 100%;
}
</style>
