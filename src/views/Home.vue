<template>
  <div class="home">
    <div class="fixed-head">
      <div class="logo">
        <img class="pic" src="../assets/images/logo.png" alt="">
        <span class="title">后台管理中心</span>
      </div>
      <ul class="user-part">
        <li>
          欢迎您
          <span class="ml_10">{{userName}}</span>
        </li>
        <li @click="logout">
          <img src="../assets/images/out.png" alt="">
          <span class="ml_10">退出</span>
        </li>
      </ul>
    </div>
    <div class="container">
        <Layout class="layout">
            <Sider hide-trigger class="aside-menu">
              <div>
              <Menu accordion ref="slideMenu" theme="dark"  width="auto" :active-name="activeName" :open-names="[openNames]" >
                <Submenu name="sys-costDetail">
                  <template slot="title">
                    <i class="icon cost"></i>
                    充值系统
                  </template>
                  <MenuItem  name="costDetail" to="costDetail">话费明细</MenuItem>
                </Submenu>
                <Submenu name="sys-customMan">
                  <template slot="title">
                    <i class="icon user"></i>
                    客户管理
                  </template>
                  <MenuItem  name="customMan" to="customMan" >客户管理</MenuItem>
                </Submenu>
                <Submenu name="sys-blankPhone">
                  <template slot="title">
                    <i class="icon check"></i>
                    黑号审核
                  </template>
                  <MenuItem  name="blankPhone" to="blankPhone">黑号审核</MenuItem>
                </Submenu>
              </Menu>
              </div>
            </Sider>
            <Content>
              <Layout class="inner-layout">
                <Header class="head">
                  <span class="title">{{innerTtitle}}</span>
                </Header>
                <Content class="inn-cont">
                   <Spin fix v-if="isLoading">
                      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
                      <div>Loading</div>
                   </Spin>
                  <keep-alive>
                   <router-view></router-view>
                  </keep-alive>
                </Content>
                <Footer class="inn-footer">copyright © 2018 查权重 All rights Reserved</Footer>
              </Layout>
            </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  name: "home",
  data(){
    return {
      userName: '',
      innerTtitle: '话费明细',
      activeName: '',
      openNames: '',
    }
  },
  computed:{
    ...mapState(['isLoading'])
  },
  created(){
    this.userName = localStorage.getItem('user')
    // this.$store.dispatch('isLoading',true)
  },
  mounted(){
    let routerName = this.$route.name;
    this.activeName = routerName;
    this.openNames = 'sys-' + routerName;
    this.innerTtitle =  this.$route.meta.title
    this.$nextTick(()=>{
      this.$refs.slideMenu.updateOpened();
      this.$refs.slideMenu.updateActiveName();
    })
  },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .fixed-head {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    background: rgba(79, 147, 254, 1);
    z-index: 10;
    .logo {
      margin-top: 18px;
      .pic {
        vertical-align: bottom;
        margin: 0 20px;
      }
      .title {
        padding-left: 12px;
        font-size: 18px;
        color: #fff;
        border-left: 1px solid #fff;
      }
    }
    .user-part {
      display: inline-flex;
      margin-right: 10px;
      line-height: 64px;
      color: #fff;
      li {
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
  .container{
    padding-top:64px;
    height: 100%;
    box-sizing: border-box;
    .layout{
      height: 100%;
      .aside-menu{
        background: #282B33;
        .icon{
            display: inline-block;
            width:16px;
            height: 16px;
            background: url(../assets/images/recharge.png) no-repeat 0 0;
            vertical-align: middle;
        }
        .user{
          background-image: url(../assets/images/users.png)
        }
        .check{
          background-image: url(../assets/images/check.png)
        }
      }
      .inner-layout{
        height: 100%;
        position: relative;
        .head{
          height: 56px;
          background: #fff;
          padding:0 40px;
          .title{
            padding-left: 10px;
            font-size: 18px;
            color:#222;
            border-left: 2px solid #4F93FE;
          }
        }
        .inn-cont{
          margin:16px 16px 28px;
          background: #fff;
            .demo-spin-icon-load{
              animation: ani-demo-spin 1s linear infinite;
            }
        }
        .inn-footer{
          padding:18px 40px;
          background: #fff;
          color: #999;
        }
      }
    }
  }
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
</style>

