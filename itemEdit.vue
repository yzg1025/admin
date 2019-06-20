<template>
    <div class="adout">
        <h1>{{id ? '编辑' : '新建'}}物品</h1>
        <el-form label-width='100px' @submit.native.prevent="save" >
            <el-form-item label='名称' style="width:54vw">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label='图标' style="width:50vw">
                <el-upload
                   class="avatar-uploader"
                   action="http://localhost:8080/api/index/items/upload"
                   :show-file-list="false"
                   :on-success="afterUpload">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
             <el-form-item>
                <el-button type='success' native-type='submit'>保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return{
           model:{},
        }
    },
    methods:{
        afterUpload(){
            this.$set(this.model,'icon',res.url)
            // this.model.icon = res.url
        },
        async save(){
             let res
             if (this.id) {
                res = await this.$axios.put(`/api/index/items/${this.id}`,this.model)
             } else {
                res = await this.$axios.post('/api/index/items',this.model)
             }
             this.$router.push('/items/list')
             this.$message({
                 type:'success',
                 message:'保存成功'
             })
        },
        async fetch(){
            const res = await this.$axios.get(`/api/index/items/${this.id}`)
            this.model = res.data
        }
    },
    created(){
        this.id && this.fetch()
    }
}
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #9af30a;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


