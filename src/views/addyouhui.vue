<template>
    <div class="addBox">
        <div class="txt">请输入具体活动相关信息</div>
        <el-form :model="form" class="form">
            <el-form-item label="优惠券名称" class="kcName">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="优惠券类型">
                <el-cascader v-model="ShelfStatus" :options="options" />
            </el-form-item>
            <el-form-item label="优惠券数量">
                <el-input v-model="form.xxjs" type="textarea" />
            </el-form-item>
            <el-form-item label="优惠券面额">
                <el-input v-model="form.xxjs" type="textarea" />
            </el-form-item>
            <el-form-item label="使用门槛">
                <el-radio-group v-model="form.resource">
                    <el-radio label="无门槛" />
                    <el-radio label="满100" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="使用范围">
                <el-radio-group v-model="form.fanwei">
                    <el-radio label="所有课程" />
                    <el-radio label="指定课程" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动日期">
                <el-date-picker type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间"
                    :default-time="defaultTime1" />
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
let ShelfStatus = ref('请选择')
const options = [
   {
       value: 'guide',
       label: 'Guide',

   }
]

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'
const form = reactive({
    name: '',
    price: '',
    resource: '',
    jsjs: '',
    xxjs: '',
    fanwei: ''
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