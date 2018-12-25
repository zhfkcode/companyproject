<template>
    <div class="cost-deatil">
        <!-- <ul class="filter-box">
            <li>
                <label class="mr_10">提交账号</label>
                 <Input v-model="account" placeholder="请选择账号" style="width: 200px" />
            </li>
            <li>
                <label class="mr_10">举报类型</label>
                 <Select v-model="type" style="width:200px">
                    <Option value="1">旺旺号</Option>
                    <Option value="2">手机号</Option>
                </Select>
            </li>
            <li>
                 <Button type="primary">查询</Button>
            </li>
        </ul> -->
        <!-- <div class="operators">
            <Button type="primary" ghost>批量通过</Button>
            <Button type="primary" ghost>批量拒接</Button>
            <Button type="primary" ghost>一键同步</Button>
        </div> -->
        <div class="table-box">
            <table>
               <tr class="table-head">
                   <!-- <th>
                       <Checkbox
                        :indeterminate="indeterminate"
                        :value="checkAll"
                        @click.prevent.native="handleCheckAll">全选</Checkbox>
                   </th> -->
                    <th>提交账号</th>
                    <th>举报账户</th>
                    <th>举报类型</th>
                    <th>提交时间</th>
                    <th>举报原因</th>
                    <th>图片查看</th>
                    <!-- <th>操作</th> -->
               </tr>
                <tr v-for="(item, index) in hPhoneList" :key="index">
                    <!-- <td>
                         <Checkbox></Checkbox>
                    </td> -->
                    <td>{{item.username}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.account}}</td>
                    <td>{{item.createdAt}}</td>
                    <td>{{item.data.content}}</td>
                    <td class="imgs">
                        <div v-for="(item, index) in item.data.images" :key="index" @click="viewImg(item)">
                            <img :src="item" alt="">
                        </div>
                    </td>
                    <!-- <td>
                        <button class="pass" @click="repPass">通过</button>
                        <button class="refuse" @click="repRefuse">拒接</button>
                    </td> -->
                </tr>
            </table>
        </div>
        <div class="pages">
            <Page :total="totalPage" show-total show-elevator @on-change="pageChange"/>
        </div>
        <Modal title="View Image" v-model="visible" footer-hide>
            <img :src="imagName" v-if="visible" style="width: 100%">
        </Modal>
        <aModal :title="popup.title" :limitModal="false">
            确定{{popup.text}}已勾选的{{popup.num}}条黑号审核？
        </aModal>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import aModal from 'components/alertModal'
export default {
    components:{
        aModal
    },
  data() {
    return {
        visible:false,
        imagName:'',
        account: '',
        type: '1',
        hPhoneList: [],
        totalPage: 0,
        checkAll: false,
        indeterminate: false,
        pageSize:10,
        popup: {
            title:'',
            text: '',
            num: ' '
        },
    };
  },
  mounted(){
      this.search(1)
  },
  methods: {
      search(num){ //搜索查询
        this.isLoading (true)
        // let params = '?acct='+this.account +"&repType="+this.type
        let params = '?page='+num
        this.axios.get('/api/v1/failAccount/list'+params)
            .then((response)=>{
            if(response.data.code == 200){
                this.$Message.success('查询成功')
                this.hPhoneList = response.data.data.content
                this.totalPage = response.data.data.totalPages
                this.pageSize = response.data.data.limit
                this.isLoading (false)
            }else{
                this.$Message.error('查询失败')
                this.isLoading (false)
                this.hPhoneList = response.data.data.content
                this.totalPage = response.data.data.totalPages
                this.pageSize = response.data.data.limit
            }
            },()=>{
                this.$Message.error('查询失败')
            })
    },
    // handleCheckAll(){ //全选

    // },
    // repPass(){

    // },
    // repRefuse(){
        
    // },
    pageChange (num){
        this.search(num)
    },
    viewImg(url){
        this.imagName = url
        this.visible =true
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
    .operators{
        margin-bottom: 16px;
        button{
            margin-right: 8px;
        }
    }
    .table-box{
        .table-head{
            background: #E8E8E8;
            th{border: 0}
        }
        .imgs{
            display: flex;
             img{
            width:32px;
            height: 32px;
            margin-right: 8px;
            }
        }
       
        td{padding:16px;
            .pass,.refuse{
                width:50px;
                height: 22px;
                color: #fff;
                border-radius: 11px;
                background: #1AA97B;
                margin-right: 8px;
                border: 0;
                outline: none;
            }
            .refuse{
                background: #F9463F;
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