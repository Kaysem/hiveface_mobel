<!--MemberStore 到店会员  -->
<template>
  <div id="MemberStore">
    <div class="memList">
      <div class="Isdata" v-if="isData">
        <p>正在期待顾客进店^~^</p>
        <button @click="ToStoreRecords()" v-text="buttonShuaxin"></button>
      </div>
      <ul v-else>
        <li @click="Membership(ToStoreList_item['sub'][0]['realmemNo'])" v-for="(ToStoreList_item,index) in ToStoreList" :key="index">
          <div class="memListOne" v-if="ToStoreList_item['sub'][0]['memType'] == 'VIP顾客'">
            <div class="memListHeadcss">
              <img :src="ToStoreList_item['sub'][0]['imgPath']" alt="" class="memListHead">
            </div>
            <div class="memListContent">
              <p class="top">推荐营业员: {{ToStoreList_item['sub'][0]['saleManName']}} </p>
              <p class="bottom">到店时间: {{ToStoreList_item['sub'][0]['ts']}}</p>
            </div>
            <div class="memListRight">
              <img src="../../assets/img/right_b.png" alt="">
              <img src="../../assets/img/new_w.png" alt="" v-if="index == 0">
            </div>
          </div>
          <div class="memListTwo" v-else-if="ToStoreList_item['sub'][0]['memType'] == '无消费顾客'">
            <div class="memListHeadcss">
              <img :src="ToStoreList_item['sub'][0]['imgPath']" alt="" class="memListHead">
            </div>
            <div class="memListContent">
              <p class="top">推荐营业员: {{ToStoreList_item['sub'][0]['saleManName']}} </p>
              <p class="bottom">到店时间: {{ToStoreList_item['sub'][0]['ts']}}</p>
            </div>
            <div class="memListRight">
              <img src="../../assets/img/right_b.png" alt="">
              <img src="../../assets/img/new_w.png" alt="" v-if="index == 0">
            </div>
          </div>
          <div class="memListThree" v-else>
            <div class="memListHeadcss">
              <img :src="ToStoreList_item['sub'][0]['imgPath']" alt="" class="memListHead">
            </div>
            <div class="memListContent">
              <p class="top">推荐营业员: {{ToStoreList_item['sub'][0]['saleManName']}} </p>
              <p class="bottom">到店时间: {{ToStoreList_item['sub'][0]['ts']}}</p>
            </div>
            <div class="memListRight">
              <img src="../../assets/img/right_b.png" alt="">
              <img src="../../assets/img/new_w.png" alt="" v-if="index == 0">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// let timeIndex = 0;
// document.addEventListener('webkitvisibilitychange', function () {
//   if (document.webkitVisibilityState === 'hidden') {
//     timeIndex = timeIndex + 1;
//   } else {
//     // 再这里再调用一遍获取列表的方法
//   }
// });
export default {
  name: 'MemberStore',
  components: {},
  props: {},
  data () {
    return {
      ToStoreList: [],
      isData: true,
      buttonShuaxin: '点击刷新',
      interval: {}
    };
  },
  created () {},
  mounted () {
    let _this = this;
    _this.ToStoreRecords();
    // clearInterval(_this.interval);
    // _this.interval = setInterval(function () {
    //   _this.ToStoreRecords();
    //   clearInterval(_this.interval);
    // }, 10000);
  },
  updated () {
    // let _this = this;
    // clearInterval(_this.interval);
  },
  beforeDestroy () {
    let _this = this;
    // clearTimeout(_this.interval);
    clearInterval(_this.interval);
  },
  watch: {},
  computed: {},
  methods: {
    getMyDate (str) {
      let _this = this;
      let oDate = new Date(str);
      let oYear = oDate.getFullYear();
      let oMonth = oDate.getMonth() + 1;
      let oDay = oDate.getDate();
      let oTime = oYear + '-' + _this.getzf(oMonth) + '-' + _this.getzf(oDay);
      return oTime;
    },
    // getDateTime (str) {
    //   let _this = this;
    //   let oDate = new Date(str);
    //   let oYear = oDate.getFullYear();
    //   let oMonth = oDate.getMonth() + 1;
    //   let oDay = oDate.getDate(), oHour = oDate.getHours();
    //   let oMin = oDate.getMinutes(), oSen = oDate.getSeconds();
    //   let oTime = oYear + '-' + _this.getzf(oMonth) + '-' + _this.getzf(oDay) + ' ' + _this.getzf(oHour) + ':' + _this.getzf(oMin) + ':' + _this.getzf(oSen); // 最后拼接时间
    //   return oTime;
    // },
    // 补0操作
    getzf (num) {
      if (parseInt(num) < 10) {
        num = '0' + num;
      }
      return num;
    },
    Membership (realmemNo) {
      let _this = this;
      if (realmemNo !== '' && realmemNo !== null && realmemNo !== undefined) {
        _this.$router.push({name: 'Membership', params: {realmemNo: realmemNo}});
      }
    },
    ToStoreRecords () {
      let _this = this;
      let timestamp = _this.getMyDate(new Date().getTime()); // 当前时间
      let json = {
        num: 'D001',
        date: timestamp
      };
      let formdata = _this.$config.formData(json);
      // 发送请求  S
      _this.buttonShuaxin = '拼命加载中...';
      _this.$axios
        .post(_this.$url.p_mem_realtime_buy, formdata)
        .then(res => {
          if (res.status === 200) {
            // clearInterval(_this.interval);
            _this.buttonShuaxin = '刷新一下';
            let data = res.data;
            for (let i = 0; i < data.length; i++) {
              if (data[i].sub.length !== 0) {
                _this.ToStoreList = data;
                _this.isData = false;
              } else {
                _this.isData = true;
              }
            }

            // for(let i=0;i<data.length;i++){
            //   if (data[i].sub[0].memType === 'VIP顾客') {
            //     _this.memListCss = "memListOne";
            //   }else if(data[i].sub[0].memType === '无消费顾客') {
            //     _this.memListCss = "memListTwo";
            //   }else {
            //     _this.memListCss = "memListThree";
            //   }
            // }
            // _this.$nextTick(() => {
            // });
          }
        }).catch(err => {
          console.log('异常:', err);
        });
      // 发送请求 E

      // _this.interval = setTimeout(function () {
      //   clearTimeout(_this.interval);
      //   _this.ToStoreRecords();
      // }, 10000);

      clearInterval(_this.interval);
      _this.interval = setInterval(() => {
        _this.ToStoreRecords();
      }, 10000);
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
ul,li,button{
  padding:0;
  margin:0;
  list-style:none;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.04);
  /* border: none; */
  outline: none;
}
li {
  width: 100%;
  height: 100%;
}
.memList {
  padding: 0 15px;
}
.Isdata {
  width: 95%;
  height: 100px;
  color: #FFA500;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 0;
  border-radius: 30px;
  position:fixed;
  left:2.5%;
  top:30%;
  box-shadow: 0 3px 30px rgba(192,192,192,0.5)
}
.Isdata button {
  width: 40%;
  height: 40px;
  border-radius: 30px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
}
.memListHeadcss{
  /* width: 20%; */
  float: left;
  height: 100%;
  margin: 0 0.3rem;
}
.memListHead {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;
  top: 16%; /*偏移*/
  /* margin-top: -50%; */
}
.memListOne {
  height: 100px;
  opacity: 0.8;
  box-shadow: 0 5px 10px rgba(242,126,32,0.5);
  margin-bottom: 10px;
  background: #f27e20 url("../../assets/img/vip_b.png") no-repeat;
  background-position: 90% 50%;
  background-size: 16%;
  border-radius: 10px;
}
.memListTwo {
  height: 100px;
  opacity: 0.8;
  box-shadow: 0 5px 10px rgba(86,176,187,0.5);
  margin-bottom: 10px;
  background: #56b0bb url("../../assets/img/no_b.png") no-repeat;
  background-position: 89% 50%;
  background-size: 17%;
  border-radius: 10px;
}
.memListThree {
  height: 100px;
  opacity: 0.8;
  box-shadow: 0 5px 10px rgba(170,100,228,0.5);
  margin-bottom: 10px;
  background: #aa64e4 url("../../assets/img/shop_b.png") no-repeat;
  background-position: 89% 50%;
  background-size: 17%;
  border-radius: 10px;
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
.memListContent p {
  margin: 5px auto;
  font-weight: 700;
}
.memListContent p:nth-child(1) {
  color: #ffffff;
}
.memListContent p:nth-child(2) {
  color: rgba(225,255,255, 0.8);
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
  right: 90%;
  margin-top: -85%;
  /* float: left; */
  /* top: 10px; */
  z-index: 10;
  width: 12px;
}
.memListRight img:nth-child(2) {
  height: 50%;
  position: absolute;
  top: 0;
  right: -10%;
}
</style>
