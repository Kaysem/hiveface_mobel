<!--MemberStore 到店会员  -->
<template>
  <div id="MemberStore">
    <div class="memList">
      <ul>
        <li class="memListOne" @click="Membership()">
          <div class="memListHeadcss">
            <img src="../../assets/img/touxiang.jpg" alt="" class="memListHead">
          </div>
          <div class="memListContent">
            <p class="top">推荐营业员: 吕江瑞 <span> &nbsp;VIP顾客&nbsp;</span></p>
            <p class="bottom">到店时间: 12:39:43</p>
          </div>
          <div class="memListRight">
            <img src="../../assets/img/right.png" alt="">
            <img src="../../assets/img/new.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MemberStore',
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
  methods: {
    Membership () {
      let _this = this;
      _this.$router.push({name: 'Membership'});
    }
  }
};
</script>
<style scoped>
#MemberStore {
  width: 100%;
  height: 100%;
  padding: 0.3rem 0 0.3rem 0;
  background-color: #f5f5f5;
  color: #000;
}
ul,li{
  padding:0;
  margin:0;
  list-style:none;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.04)
}
li {
  width: 100%;
  height: 100%;
}
.memListHeadcss{
  width: 20%;
  float: left;
  height: 100%;
  margin: 0 0.3rem;
}
.memListHead {
  width: 100%;
  border-radius: 50%;
  position: relative;
  top: 50%; /*偏移*/
  margin-top: -50%;
}
.memListOne {
  height: 100px;
  background-color: #fff;
  /* display: flex;
  flex-direction: row;
  justify-content:space-around; */
}

.memListContent {
  /* width:60%; */
  height: 100%;
  color:black;
  font-size: 16px;
  clear: both;
  display: inline-flex;
  flex-direction: column;
  justify-content:center;
}
.memListContent p:nth-child(1) {
  margin: 0.5rem 0 0 0;
  color: #000;

}
.memListContent p:nth-child(1) span {
  background-color: #a65de3;
  color:#fff;
  border-radius: 10%;
}
.memListContent p:nth-child(2) {
  color: #666666;
}
.memListRight {
  /* width: 19%; */
  height: 100%;
  float: right;
  position: relative;
}
.memListRight img:nth-child(1) {
  position: relative;
  top: 50%; /*偏移*/
  right: 50%;
  margin-top: -85%;
  /* float: left; */
  /* top: 10px; */
  z-index: 10;
}
.memListRight img:nth-child(2) {
  height: 50%;
  position: absolute;
  top: 0;
  right: -10%;
}
</style>
