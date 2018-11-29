<!--  -->
<template>
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
  </div>
</template>

<script>
export default {
  name: 'Membership',
  components: {},
  props: {},
  data () {
    return {
    };
  },
  created () {},
  mounted () {},
  watch: {},
  computed: {},
  methods: {}
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
.card {
  width: 100%;
  background-color: #fff;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.08);
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
  margin: 0 0.3rem;
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
}
.perInfo_top_right>p:nth-child(2),.perInfo_top_right>p:nth-child(3) {
  color: #444444;
  opacity: 0.9;
  font-weight: 700;
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
</style>
