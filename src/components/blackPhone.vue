<template>
    <div class="cost-deatil">
        <ul class="filter-box">
            <li>
                <label class="mr_10">提交账号</label>
                 <Input v-model="account" placeholder="Enter something..." style="width: 200px" />
            </li>
            <li>
                <label class="mr_10">提交账号</label>
                 <Select v-model="type" style="width:200px">
                    <Option value="1" >1</Option>
                    <Option value="2" >2</Option>
                    <Option value="3" >3</Option>
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
                <tr v-for="(item, index) in costList" :key="index">
                    <td>{{item.acc}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.repAcct}}</td>
                    <td>{{item.repCont}}</td>
                    <td>{{item.date}}</td>
                    <td>
                        <span class="pass">通过</span>
                        <span class="refuse">拒接</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="pages">
            <Page :total="100" show-total show-elevator/>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        account: '',
        type: '',
        costList: []
    };
  },
  mounted(){
      let mock = [{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'},{acc:'1888655565',type: '旺旺号', repAcct: '1888655565',repCont:'恶意退款', date: '2016-10-12 12:20:35'}]
      this.costList = mock
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
        td{padding:16px;}
        th{padding:16px;}
    }
    .pages{
        text-align: center;
        margin-top: 30px; 
    }
}
</style>