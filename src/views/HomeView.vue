<template>
    <div class="box">
        <div class="left">
            <div>教育管理系统</div>
            <el-row class="tac">
                <el-col>
                    <el-menu active-text-color="#ffd04b" background-color="rgba(32, 39, 65, 1)"
                        class="el-menu-vertical-demo" :default-active="this.$route.path" text-color="#fff" :router="true">
                        <el-menu-item index="/homeView/home">
                            <el-icon class="iconfont icon-shouye"></el-icon>
                            首页
                        </el-menu-item>
                        <el-menu-item index="/homeView/cm">
                            <el-icon class="iconfont icon-tushu1">
                            </el-icon>
                            课程管理
                        </el-menu-item>
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon class="iconfont icon-dingdan">

                                </el-icon>
                                <span>订单管理</span>
                            </template>
                            <el-menu-item index="/homeView/order" >订单</el-menu-item>
                            <el-menu-item index="/homeView/refund" >退款</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="4">
                            <template #title>
                                <el-icon class="iconfont icon-yonghuguanli_huaban">
                                </el-icon>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item index="/homeView/student" >学员</el-menu-item>
                            <el-menu-item index="/homeView/lecturer" >讲师</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="5">
                            <template #title>
                                <el-icon class="iconfont icon-zixun">
                                </el-icon>
                                <span>资讯管理</span>
                            </template>
                            <el-menu-item index="/homeView/banner">轮播图</el-menu-item>
                            <el-menu-item index="/homeView/article">文章</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="6">
                            <template #title>
                                <el-icon class="iconfont icon-shouye1">
                                </el-icon>
                                <span>促销管理</span>
                            </template>
                            <el-menu-item index="/homeView/miaosha">秒杀活动</el-menu-item>
                            <el-menu-item index="/homeView/youhui">优惠券</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="/homeView">
                            <el-icon>
                                <setting />
                            </el-icon>
                            <span>Navigator Four</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="right">
            <div class="nav">
                <div class="nav-left">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: 'home' }">{{  }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="nav-right">
                    <span class="iconfont icon-question"></span>
                    <span class="iconfont icon-tixing"></span>

                    <img src="" alt="">
                    <span>111</span>
                    <span>|</span>
                    <span class="iconfont icon-tuichu"></span>
                    <span>退出</span>
                </div>
            </div>
            <div class="cont">
                <RouterView>

                </RouterView>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import axios from 'axios';
function ShowHome() {
    router.push('home')
}




</script>

<style scoped lang="less">
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
}

.box {
    display: flex;

    .left {
        width: 208px;
        min-height: 150vh;
        // font-size: 16px;
        height: 100%;
        opacity: 1;
        background: rgba(32, 39, 65, 1);
        color: #fff;

    }

    .right {
        flex: 1;
        background: rgba(235, 236, 237, 1);

        .nav {
            background: #fff;
            display: flex;
            height: 80px;
            line-height: 80px;
            font-size: 16px;
            justify-content: space-between;
            align-items: center;

            .nav-right {
                display: flex;
                color: #000;

                span {
                    margin-left: 10px;
                }
            }
        }

        .cont {
            height: 100%;

        }
    }
}
</style>