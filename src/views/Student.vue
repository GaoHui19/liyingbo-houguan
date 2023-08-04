<template>
    <div class="CM-nav">
        <div class="scsj">
            <span>提交时间</span>
            <el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间"
                :default-time="defaultTime1" />
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

        </div>
        <div class="CMC-table">
            <el-table :data="tableData" style="width: 100%" ref="multipleTableRef">
                <el-table-column type="selection" width="55" align="center" />
                <el-table-column prop="serialNumber" label="用户ID" width="140" align="center">
                </el-table-column>
                <el-table-column prop="upLink" label="用户昵称" width="150" align="center" />
                <el-table-column prop="tel" label="手机号" width="180" show-overflow-tooltip align="center" />
                <el-table-column prop="price" label="付费金额" width="140" align="center" />
                <el-table-column prop="sales" label="订单数量" width="140" align="center" />
                <el-table-column prop="uploadTime" label="提交时间" width="200" align="center" />
                <el-table-column prop="select" label="账户禁用" width="200" align="center">
                    <template v-slot="scope">
                        <el-switch v-model="scope.row.select" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" align="center">

                    <el-button style="display: inline-block; font-size: 14px; padding: 0;" type="success" text size="small"
                        @click="$router.push('/homeView/orderDetail')">编辑</el-button>
                    <el-button style="display: inline-block; font-size: 14px;padding: 0;" type="success" text
                        size="small">删除</el-button>


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
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: true
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }, {
        title: '编号',
        serialNumber: 'CODE001',
        upLink: '金金',
        tel: 15810000000,
        price: 88.00,
        status: '待支付',
        sales: 8,
        uploadTime: '2021.07.01 15:00',
        select: false
    }
]
</script>

<style scoped></style>