<template>
    <div class="addBox">
        <div class="txt">请输入讲师相关信息</div>
        <el-form :model="form" class="form">
            <el-form-item label="讲师名称" class="kcName">
                <el-input v-model="form.name"  />
            </el-form-item>
            <el-form-item label="讲师头像" class="kcName">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="讲师简介" class="kcjs">
                <el-input v-model="form.kcjj" type="textarea" />
            </el-form-item>
            <el-form-item label="详细介绍" class="xxjs">
                <el-input v-model="form.xxjs" type="textarea" />
            </el-form-item>
            <el-form-item style=" margin: 20px 0 0 154px;">
                <el-button type="primary" @click="onSubmit">确认</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import '../css/addLer.css'
import { Plus } from '@element-plus/icons-vue'

const form = reactive({
    name: '',
    price: '',
    resource: '',
    jsjs:'',
    xxjs:''
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