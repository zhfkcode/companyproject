<template>
    <div class="cost-deatil">
        <ul class="filter-box">
            <li>
                <label class="mr_10">账号</label>
                 <Input v-model="account" placeholder=" 请输入账号" style="width: 200px" />
            </li>
            <li>
                <label class="mr_10">消费类型</label>
                 <Select v-model="type" style="width:200px">
                    <Option value="0">全部</Option>
                    <Option value="1" >1</Option>
                    <Option value="2" >2</Option>
                    <Option value="3" >3</Option>
                </Select>
            </li>
            <li>
                <label class="mr_10">时间</label>
                 <DatePicker v-model="date" :options="dateRange" type="daterange" format="yyyy-MM-dd" placement="bottom-end" placeholder="请选择时间范围" style="width: 200px"></DatePicker>
            </li>
            <li>
                 <Button type="primary" @click="search">查询</Button>
            </li>
        </ul>
        <div class="table-box">
            <table>
               <tr class="table-head">
                    <th>账户</th>
                    <th>花费金额</th>
                    <th>消费记录</th>
                    <th>消费时间</th>
               </tr>
                <tr v-for="(item, index) in costList" :key="index">
                    <td>{{item.acct}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.record}}</td>
                    <td>{{item.date}}</td>
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
import {formate} from '../common/utils.js'
export default {
  data() {
    return {
        account: '',
        type: '0',
        date:'',
        costList: [],
        totalPage: 0,
        dateRange: {
            disabledDate (date) {
                return date && date.valueOf() > Date.now() ;
            }
        }
    };
  },
  created(){
  },
  mounted(){
     console.log('mouted')
      let mock = [{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},{acct:'1888655565',money: 555, record: '黑号查询', date: '2016-10-12 12:20:35'},]
      this.costList = mock
  },
   methods:{
    search(){ //搜索查询
        let params = '?acct='+this.account +"&costType="+this.type+"&startTime="+format(this.date[0])+"&endTime="+format(this.date[1])
        this.axios.get('/api/v1/costDetail'+params)
            .then((response)=>{
            if(responsed.data.code == 200){
                this.$Message.success('查询成功')
                // this.costList = response.data.data
                // this.totalPage = this.costList.length
                 this.isLoading =false
            }
            },()=>{
                this.$Message.error('查询失败')
            })
    },
    pageChange(num){
        
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
            label{color:#222;}
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
</style>