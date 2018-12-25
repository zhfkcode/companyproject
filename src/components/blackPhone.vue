<template>
    <div class="cost-deatil">
        <ul class="filter-box">
            <li>
                <label class="mr_10">提交账号</label>
                 <Input v-model="account" placeholder="请选择账号" style="width: 200px" />
            </li>
            <li>
                <label class="mr_10">提交账号</label>
                 <Select v-model="type" style="width:200px">
                    <Option value="1">旺旺号</Option>
                    <Option value="2">手机号</Option>
                </Select>
            </li>
            <li>
                 <Button type="primary">查询</Button>
            </li>
        </ul>
        <div class="table-box">
            <table>
               <tr class="table-head">
                    <th>提交账号</th>
                    <th>举报类型</th>
                    <th>举报账户</th>
                    <th>举报内容</th>
                    <th>提交时间</th>
                    <th>操作</th>
               </tr>
                <tr v-for="(item, index) in hPhoneList" :key="index">
                    <td>{{item.acct}}</td>
                    <td>{{item.repType}}</td>
                    <td>{{item.repAcct}}</td>
                    <td>{{item.repCont}}</td>
                    <td>{{item.subDate}}</td>
                    <td>
                        <span class="pass" @click="repPass">通过</span>
                        <span class="refuse" @click="repRefuse">拒接</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="pages">
            <Page :total="totalPage" show-total show-elevator @on-change="pageChange"/>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
        account: '',
        type: '1',
        hPhoneList: [],
        totalPage: 0,
    };
  },
  mounted(){
      let mock = [{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},{acct:'1888655565',repType: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', subDate: '2016-10-12 12:20:35'},]
      this.hPhoneList = mock
  },
  methods: {
      search(){ //搜索查询
        let params = '?acct='+this.account +"&repType="+this.type
        this.axios.get('/api/v1/costDetail'+params)
            .then((response)=>{
            if(responsed.data.code == 200){
                this.$Message.success('查询成功')
                // this.hPhoneList = response.data.data
                // this.totalPage = this.hPhoneList.length
                 this.isLoading =false
            }
            },()=>{
                this.$Message.error('查询失败')
            })
    },
    repPass(){

    },
    repRefuse(){
        
    },
    pageChange (name){

    },
    ...mapActions(['isLoading'])
  }
};
</script>

<style lang="scss" scoped>
.cost-deatil {
    padding:24px;
    .filter-box{
        margin: 8px 0 24px;
        display: flex;
        li{
            margin-right:50px;
        }
    }
    .table-box{
        .table-head{
            background: #E8E8E8;
            th{border: 0}
        }
        td{padding:16px;
            .pass{
                color: #0177D5;
                border-right:1px solid #E5E5E5;
                padding-right: 10px;
                cursor: pointer;
            }
            .refuse{
                color: #F64C3E;
                margin-left: 10px;
                cursor: pointer;
            }
        }
        th{padding:16px;}
    }
    .pages{
        text-align: center;
        margin-top: 30px; 
    }
}
</style>