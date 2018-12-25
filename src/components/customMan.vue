<template>
    <div class="cost-deatil">
        <ul class="filter-box">
            <li>
                <label class="mr_10">账号</label>
                 <Input v-model="account" placeholder="请输入账号" style="width: 200px" />
            </li>
            <li>
               <label class="mr_10">注册时间</label>
                 <DatePicker v-model="regDate" :options="regLimit" type="date" placement="bottom-end" placeholder="请选择注册时间" style="width: 200px"></DatePicker>
            </li>
            <li>
                <label class="mr_10">最近登录时间</label>
                 <DatePicker  v-model="recentDate" :options="recentLimit" type="date" placement="bottom-end" placeholder="请选择最近登录时间" style="width: 200px"></DatePicker>
            </li>
            <li>
                 <Button type="primary"  @click="search">查询</Button>
                  <Button style="margin-left:70px;"  @click="exportData">表格导出</Button>
            </li>
        </ul>
        <div class="table-box">
            <table>
               <tr class="table-head">
                    <th>账户</th>
                    <th>账户余额</th>
                    <th>QQ</th>
                    <th>邀请人</th>
                    <th>注册时间</th>
                    <th>最近登录时间</th>
               </tr>
                <tr v-for="(item, index) in customList" :key="index">
                    <td>{{item.acct}}</td>
                    <td>￥{{item.moneny}}</td>
                    <td>{{item.qq}}</td>
                    <td>{{item.inviter}}</td>
                    <td>{{item.regTime}}</td>
                    <td>{{item.recetTime}}</td>
                </tr>
            </table>
        </div>
        <div class="pages">
            <Page :total="totalPage" show-total show-elevator @on-change="pageChange"/>
        </div>
        <Modal width="375" v-model="limitModal" footer-hide>
            <div class="limit">
                <h2 class="tit">提示信息</h2>
                <p class="word">只能导出近90天的数据</p>
                <Button type="primary" @click="exportData">确定</Button>
                <Button class="ml_10" @click="limitModal = false">取消</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {formate} from '../common/utils.js'
export default {
  data() {
    return {
        account: '',
        recentDate: '',
        regDate: '',
        totalPage: 0,
        customList: [],
        limitModal: true,
        regLimit: {
            disabledDate (date) {
                return date && date.valueOf() > Date.now() ;
            }
        },
        recentLimit: {
            disabledDate (date) {
                return date && date.valueOf() > Date.now() ;
            }
        }
    };
  },
  mounted(){
      let mock = [{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},{acct:'1888655565',moneny: 555, qq: '106542207',inviter:'张三', regTime: '2016-10-12 12:20:35',recetTime: '2016-10-12 12:20:35'},]
      this.customList = mock
  },
  methods:{
       search(){ //搜索查询
       console.log(this.recentDate)
       return false 
        let params = '?acct='+this.account +"&regDate="+format(this.regDate)+"&recentDate="+format(this.recentDate)
        this.axios.get('/api/v1/customMan'+params)
            .then((response)=>{
            if(responsed.data.code == 200){
                this.$Message.success('查询成功')
                // this.customList = response.data.data
                // this.totalPage = this.customList.length
                 this.isLoading =false
            }
            },()=>{
                this.$Message.error('查询失败')
        })
    },
    pageChange(num){

    },
    exportData(){
        
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
            color: #222;
        }
    }
    .table-box{
        .table-head{
            background: #E8E8E8;
            th{border: 0}
        }
        td{padding:16px;}
        th{padding:16px;color:#222;}
    }
    .pages{
        text-align: center;
        margin-top: 30px; 
    }
    
}
.limit{
    padding: 5px 14px; 
    .tit{
        font-weight: bold;
        margin-bottom: 30px;
    }
    .word{
        font-size:12px;
         margin-bottom: 20px;
    }
    }
</style>