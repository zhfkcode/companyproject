<template>
    <div class="cost-deatil">
        <ul class="filter-box">
            <li>
                <label class="mr_10">账号</label>
                 <Input v-model="account" placeholder="Enter something..." style="width: 200px" />
            </li>
            <li>
               <label class="mr_10">注册时间</label>
                 <DatePicker type="date" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </li>
            <li>
                <label class="mr_10">最近登录时间</label>
                 <DatePicker type="date" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
            </li>
            <li>
                 <Button type="primary">查询</Button>
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
                <tr v-for="(item, index) in costList" :key="index">
                    <td>{{item.acc}}</td>
                    <td>￥{{item.moneny}}</td>
                    <td>{{item.qq}}</td>
                    <td>{{item.inviter}}</td>
                    <td>{{item.regDate}}</td>
                    <td>{{item.receDate}}</td>
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
      let mock = [{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'},{acc:'1888655565',moneny: 555, qq: '106542207', inviter: '2016-10-12 12:20:35',receDate: '2016-10-12 12:20:35'}]
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