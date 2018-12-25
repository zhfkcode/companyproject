<template>
    <div class="cost-deatil" ref="filterbox">
        <ul class="filter-box" >
            <li>
                <label class="mr_10">账号</label>
                 <Input v-model="account" placeholder="请输入账号" style="width: 200px" />
            </li>
            <li>
               <label class="mr_10">注册时间</label>
               <DatePicker v-model="regDate" :options="regLimit" type="daterange"  placement="bottom-end" placeholder="请选择注册时间" style="width: 200px"></DatePicker>
            </li>
            <li>
                <label class="mr_10">最近登录时间</label>
                 <DatePicker  v-model="recentDate" :options="recentLimit" type="date" placement="bottom-end" placeholder="请选择最近登录时间" style="width: 200px"></DatePicker>
            </li>
            <li>
                 <Button type="primary"  @click="search(1)">查询</Button>
                  <!-- <Button style="margin-left:70px;"  @click="export2Excel">表格导出</Button> -->
            </li>
        </ul>
        <div class="table-box">
            <table>
               <tr class="table-head">
                    <th>账户</th>
                    <!-- <th>账户余额</th> -->
                    <th>QQ</th>
                    <!-- <th>邀请人</th> -->
                    <th>注册时间</th>
                    <th>最近登录时间</th>
               </tr>
                <tr v-for="(item, index) in customList" :key="index">
                    <td>{{item.username}}</td>
                    <!-- <td>￥{{item.moneny}}</td> -->
                    <td>{{item.userqq}}</td>
                    <!-- <td>{{item.inviter}}</td> -->
                    <td>{{item.created_at?item.created_at:'--'}}</td>
                    <td>{{item.login_time?item.login_time:'--'}}</td>
                </tr>
            </table>
        </div>
        <div class="pages">
            <Page :total="totalPage" show-total show-elevator @on-change="pageChange" :page-size="pageSize"/>
        </div>
        <!-- 提示框 -->
        <aModal title="提示信息" @modal-sure= "export2Excel" :limitModal="false">
            只能导出近90天的数据
        </aModal>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {formate} from '../common/utils.js'
import aModal from "components/alertModal"
export default {
    components:{
        aModal
    },
  data() {
    return {
        account: '',
        recentDate: '',
        regDate: '',
        totalPage: 0,
        customList: [],
        limitModal: true,
        pageSize: 10,
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
    this.search(1)
  },
  methods:{
       search(num){ //搜索查询
        this.isLoading(true)
        let start = formate(this.regDate[0]),end = formate(this.regDate[1]),recnetDate = formate(this.recentDate)
        let params = '?account='+this.account +"&login_time_start="+start+"&login_time_end="+end+'&page='+num
        this.axios.get('/api/v1/customer/list'+params)
            .then((response)=>{
            if(response.data.code == 200){
                this.$Message.success('查询成功')
                this.customList = response.data.data.data
                this.totalPage = response.data.data.totalPages
                this.pageSize = response.data.data.limit
                 this.isLoading (false)
            }else{
                this.$Message.error('查询失败')
                this.isLoading (false)
                this.customList = response.data.data.data
                this.totalPage = response.data.data.totalPages
                this.pageSize = response.data.data.limit
            }
            },()=>{
                this.$Message.error('查询失败')
                 this.isLoading (false)
        })
    },
    pageChange(num){
        this.search(num)
    },
    exportData(){
        
    },
    // 下载到excel
    export2Excel() {
        require.ensure([], () => {
            const { export_json_to_excel } = require('@/common/export/Export2Excel');
            const tHeader = ['账户', '账户余额', 'QQ', '邀请人', '注册时间','最近登录时间'];
            const filterVal = ['acct', 'moneny', 'qq', 'inviter', 'regTime','recetTime'];
            const list = this.customList;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '客户数据');
        })
    },
    formatJson(filterVal, jsonData) {
     return jsonData.map(v => filterVal.map(j => v[j]))
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
</style>