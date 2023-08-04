<template>
    <div class="CM-nav">
        <div class="scsj">
            <span>提交时间</span>
            <el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间"
                :default-time="defaultTime1" />
        </div>
        <div class="scsj1">
            <span>提交状态</span>
            <el-cascader v-model="ShelfStatus" :options="options" />
        </div>

        <div class="scsj2">
            <span>手动搜索</span>
            <input type="text" placeholder="请输入课程标题或关键词">
            <el-button type="warning">搜索</el-button>
            <el-button type="warning" plain>重置</el-button>
        </div>


    </div>
    <div class="CM-content">
        <div class="CMC-n">
            <p>课程列表</p>
            <p @click="$router.push('/homeView/addCm')">
                <span></span>
                添加课程
            </p>
        </div>
        <div class="CMC-table">
            <el-table :data="tableData" style="width: 100%" ref="multipleTableRef">
                <el-table-column type="selection" width="55" align="center" />
                <el-table-column prop="serialNumber" label="订单编号"  align="center">
                </el-table-column>
                <el-table-column prop="upLink" label="用户昵称"  align="center" />
                <el-table-column prop="tel" label="手机号" show-overflow-tooltip align="center" />
                <el-table-column prop="name" show-overflow-tooltip label="课程名称"  align="center" />
                <el-table-column prop="price" label="订单金额"  align="center" />
                <el-table-column prop="status" label="订单状态" align="center" />
                <el-table-column prop="uploadTime" label="提交时间" width="220" align="center" />
                <el-table-column label="操作" width="200" align="center">
                    <template #default>
                        
                        <div >
                            <el-button style="display: inline-block; font-size: 14px; padding: 0;" type="success" text size="small" @click="$router.push('/homeView/orderDetail')">查看</el-button>
                            <el-button style="display: inline-block; font-size: 14px;padding: 0;" type="success" text size="small">取消</el-button>
                        </div>
                    </template>


                </el-table-column>
            </el-table>
            <div style="display: flex; margin-top: 20px;">

                <el-button @click="toggleSelection(tableData)">全选</el-button>
                <el-pagination background layout="prev, pager, next" :total="100" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import '../css/order.css'
import { ElTable } from 'element-plus'

const value1 = ref('')
let ShelfStatus = ref('')
let upLink = ref('')
const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'

const options = [
    {
        value: 'guide',
        label: 'Guide',

    },
    {
        value: 'component',
        label: 'Component',

    },
    {
        value: 'form',
        label: 'Form',

    },
    {
        value: 'data',
        label: 'Data',

    },
    {
        value: 'notice',
        label: 'Notice',

    },
    {
        value: 'navigation',
        label: 'Navigation',

    },
    {
        value: 'others',
        label: 'Others',

    },
    {
        value: 'resource',
        label: 'Resource',

    },
]

const multipleTableRef = ref()
const toggleSelection = (rows) => {
    if (rows) {
        rows.forEach((row) => {
            // console.log(multipleTableRef.value);
            multipleTableRef.value.toggleRowSelection(row, undefined)
        })
    } else {
        // multipleTableRef.value.clearSelection()
    }
}


const tableData = [
    {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3',
        tel: 15810000000,
        status: '待支付',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        select: false
    }
]
</script>

<style scoped></style>