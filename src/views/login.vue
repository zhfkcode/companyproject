<template>
    <div class="login-wrapper">
        <div class="box">
            <div class="left">
                <img src="../assets/images/login-pic.png" alt="userPic">
            </div>
            <div class="right">
                <h3 class="title">查权重后台管理中心</h3>
                <div class="form">
                    <div class="form-item">
                        <div class="put" :class="{'focus':hasFocus==1}">
                            <span class="avat"></span>
                            <input v-model="user" type="text" class="pt" placeholder="请输入用户名" @focus="iptFocus(1)" @blur="iptBlur">
                        </div>
                    </div>
                    <div class="form-item">
                        <div class="put" :class="{'focus':hasFocus==2}">
                            <span class="avat pwd"></span>
                            <input v-model="pwd" type="text" class="pt" placeholder="请输入密码" @focus="iptFocus(2)" @blur="iptBlur">
                        </div>
                    </div>
                    <div class="form-item">
                        <Checkbox v-model="remUer"  class="remember">记住用户名</Checkbox>
                    </div>
                    <div class="form-item">
                        <input type="button" value="登录" class="login-btn" @click="loginBtn" >
                        <div class="error-tip" v-if="logErr">
                            <span class="icon"></span>
                            <span >账号或密码错误，请重新输入</span>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">copyright © 2018 查权重 All rights Reserved</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            user: '',
            pwd: '',
            remUer: false,
            logErr: false,
            hasFocus: 0
        }
    },
    methods:{
        loginBtn(){//登录
        this.logErr = false //影藏错误提示
        this.axios.post('',{
            user:this.user,
            pwd: this.pwd
        })
        .then((response) => {
            if(this.response.data.code==200){
                this.$Message.success('登陆成功')
                let redPath = this.$route.query.redirect
                if(redPath){
                    this.$route.replace({
                        path:''
                    })
                }else{
                    this.$route.push({
                        path:'/'
                    })
                }
                
            }else if(this.response.data.code==400){
                this.$Message.error('用户名密码错误')
                this.logErr = true
            }
        },(err) => {})

        },
        iptFocus(index){
            this.hasFocus = index
        },
        iptBlur(){
            this.hasFocus = 0
        }
    }
}
</script>
<style lang="scss" scoped>
.login-wrapper{
    height: 100%;
    background: url(../assets/images/loginBg.png) no-repeat center/cover;
    position: relative;
    .box{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        background: #fff;
        align-items: center;
        width:1200px;
        .left{
            flex: 1;
            padding:0 100px;
            margin-right:10px;
            img{
                vertical-align: middle;
            }
        }
        .right{
            flex:1;
            .title{
                margin-top: 120px;
                font-size: 44px;
                line-height: 90px;
                color: #222;
            }
            .form{
                padding-top: 22px;
                .form-item{
                    margin-bottom: 20px;
                    .remember{
                        vertical-align: sub;
                        margin-left: 10px;
                    }
                    .put{
                        width:340px;
                        padding:20px 10px;
                        display: flex;
                        border-bottom: 2px solid #EEEEEE;
                        &.focus{
                            border-bottom-color:  #4F93FE;
                        }
                        .avat{
                            margin-right: 20px; 
                            display: inline-block;
                            width: 28px;
                            height: 30px;
                            background: url(../assets/images/user.png) no-repeat 0 0;
                            &.pwd{
                                background-image:url(../assets/images/pwd.png) 
                            }
                        }
                        .pt{
                            height: 30px;
                            border:0;
                            outline: #4F93FE;
                            font-size:20px;
                        }
                    }
                    .login-btn{
                        margin-top:40px;
                        margin-bottom:20px;
                        width:320px;
                        height: 66px;
                        font-size: 28px;
                        color:#fff;
                        border:0;
                        border-radius:33px;
                        background: #4F93FE;
                        outline: 0;
                        &:hover{
                            background: rgb(88, 141, 226);
                        }
                    }
                    .error-tip{
                        width:230px;
                        text-align: center;
                        .icon{
                            margin-right:10px;
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background: url(../assets/images/user.png) no-repeat 0 0;
                            vertical-align: sub;
                        }
                    }
                }
            }
            .footer-copyright{
                margin-top:50px;
                color: #999;
                line-height: 55px;

            }
        }
    }
}
</style>
