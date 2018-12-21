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
          <span class="ml_10">Yolanda</span>
        </li>
        <li>
          <img src="../assets/images/out.png" alt="">
          <span class="ml_10">退出</span>
        </li>
      </ul>
    </div>
    <div class="container">
        <Layout class="layout">
            <Sider hide-trigger class="aside-menu">
              <div>
              <Menu accordion theme="dark"  width="auto">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-paper" />
                    充值系统
                  </template>
                  <MenuItem  name="1-1" to="costDetail">话费明细</MenuItem>
                  <MenuItem  name="1-2" >话费明细</MenuItem>
                  <MenuItem  name="1-3" >话费明细</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-paper" />
                    客户管理
                  </template>
                  <MenuItem  name="1-2" to="customMan" >客户管理</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-paper" />
                    黑号审核
                  </template>
                  <MenuItem  name="1-3" to="blankPhone">黑号审核</MenuItem>
                </Submenu>
              </Menu>
              </div>
            </Sider>
            <Content>
              <Layout class="inner-layout">
                <Header class="head">
                  <span class="title">花费明细</span>
                </Header>
                <Content class="inn-cont">
                  <router-view></router-view>
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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
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
      }
      .inner-layout{
        height: 100%;
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
</style>

