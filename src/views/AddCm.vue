<template>
    <div class="addBox">
        <div class="txt">请输入课程相关信息</div>
        <el-form :model="form" class="form">
            <el-form-item label="课程名称" class="kcName">
                <el-input v-model="form.name"  />
            </el-form-item>
            <el-form-item label="封面图片" class="kcName">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品限制">
                <el-radio-group v-model="form.resource">
                    <el-radio label="上架状态" />
                    <el-radio label="下架状态" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="课程价格" class="kcName">
                <el-input v-model="form.price" width="350px" />
            </el-form-item>
            <el-form-item label="课程简介" class="kcjs">
                <el-input v-model="form.kcjj" type="textarea" />
            </el-form-item>
            <el-form-item label="讲师介绍" class="kcjs">
                <el-input v-model="form.jsjs" type="textarea" />
            </el-form-item>
            <el-form-item label="课程目录" class="kcml">
                <el-input v-model="form.kcml"  />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import '../css/addCm.css'
import { Plus } from '@element-plus/icons-vue'

const form = reactive({
    name: '',
    price: '',
    resource: '',
    kcjj: '',
    jsjs:'',
    kcml:''
})

const onSubmit = () => {
    console.log('submit!')
}

// 上传封面
const imageUrl = ref('')

const handleAvatarSuccess = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
</script>

<style scoped></style>