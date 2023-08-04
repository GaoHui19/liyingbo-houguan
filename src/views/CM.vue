<template>
    <div class="CM-nav">

        <div class="scsj">
            <span>上传时间</span>
            <el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始时间" end-placeholder="结束时间"
                :default-time="defaultTime1" />
        </div>
        <div class="scsj1">
            <span>上架状态</span>
            <el-cascader v-model="ShelfStatus" :options="options" />
        </div>
        <div class="scsj1">
            <span>上传人</span>
            <el-cascader v-model="upLink" :options="options" />
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
                <el-table-column prop="serialNumber" label="编号" width="140" align="center">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="150" show-overflow-tooltip align="center" />
                <el-table-column label="封面" width="180" align="center">
                    <img src="https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png" alt="">
                </el-table-column>

                <el-table-column prop="status" label="上架状态" width="140" align="center" />
                <el-table-column prop="price" label="价格" width="140" align="center" />
                <el-table-column prop="sales" label="销量" width="140" align="center" />
                <el-table-column prop="upLink" label="上传人" width="140" align="center" />
                <el-table-column prop="uploadTime" label="上传时间" width="200" align="center" />
                <el-table-column label="操作" width="200" align="center">
                    <template #default>
                        <div >
                            <el-button style="display: inline-block; font-size: 14px; padding: 0;" type="success" text size="small">编辑</el-button>
                            <el-button style="display: inline-block; font-size: 14px;padding: 0;" type="success" text size="small">下架</el-button>
                            <el-button style="display: inline-block; font-size: 14px;padding: 0;" type="success" text size="small">删除</el-button>
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
import '../css/cm.css'
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
        name: '教程名称文字示例1如果超出八个字显…这是教程示例3是教程名称示例4教程名称示例5教程名称示例6教程名称示例7教程名称示例8教程名称示例9教程名称示例10',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    },
    {
        title: '名称',
        serialNumber: 'CODE001',
        name: '教程名称文字示例1',
        cover: 'https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png',
        status: '上架',
        price: 88.00,
        sales: 640,
        upLink: '金金',
        uploadTime: '2021.07.01 15:00',
        operate: '编辑 | 下架 删除',
        select: false
    }
]
</script>

<style scoped></style>