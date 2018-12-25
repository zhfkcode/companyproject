<template>
  <div class="alert-modal">
      <Modal width="375" v-model="control" footer-hide>
            <div class="limit">
                <h2 class="tit">{{title}}</h2>
                <p class="word">
                    <slot></slot>
                </p>
                <Button type="primary" @click="sureBtn">确定</Button>
                <Button class="ml_10" @click="control = false">取消</Button>
            </div>
        </Modal>
  </div>
</template>

<script>
export default {
    props:['title','limitModal'],
  data() { 
    return {
        control:this.limitModal
    }
  },
  methods:{
      sureBtn(){
          this.limitModal = false;
          this.$emit('modal-sure')
      }
  }
 }
</script>

<style lang="scss" scoped>
  .alert-modal{
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
  }
</style>