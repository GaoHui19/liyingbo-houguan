<template>
   <div class="CM-content">
       <div class="CMC-n">
           <p>秒杀时段列表</p>
           <p @click="$router.push('/homeView/addArticle')">添加时段</p>
       </div>
       <div class="CMC-table">
           <el-table :data="tableData" style="width: 100% " ref="multipleTableRef">
               <el-table-column type="selection" width="55" align="center" />
               <el-table-column label="场次编号"  prop="bianhao" align="center" />    
               <el-table-column label="场次名称" prop="name"  align="center" />
               <el-table-column label="每日开始时间" prop="actionTime" align="center" />
               <el-table-column label="每日结束时间" prop="overTime" align="center" />
               <el-table-column label="课程数量" prop="num" align="center" />
               <el-table-column label="操作" align="center">

                   <el-button style="display: inline-block; font-size: 14px; padding: 0;" type="success" text size="small"
                       @click="$router.push('/homeView/orderDetail')">编辑</el-button>
                   <el-button style="display: inline-block; font-size: 14px;padding: 0;" type="warning" text
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
       name: '上午场1',
       actionTime: '08:00:00',
       overTime:'08:00:00',
       num:'8',
       bianhao:'CDE001',

   }
]
</script>

<style scoped></style>