<template>
    <div class="box">
        <div class="left">
            <div class="nav">
                <span class="iconfont icon-tushu "> </span>
                <span>教育管理系统</span>
            </div>
            <div class="text">
                <div class=" text-h">欢迎回来</div>
                <div class="text-t">水静流深，涂歌巷弄</div>
                <div class=" text-d" @click="GoRegister">
                    没账户，去注册
                </div>
            </div>

        </div>


        <div class="right">
            <h2 class="text-nav">后台登录</h2>
            <div class="iconfont icon-jyonghu3">
                <input type="text" placeholder="请输入用户名" v-model="phone">
            </div>
            <div class="iconfont icon-mima">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="iconfont icon-yanzhengyanzhengma">
                <input type="text" name="" id="" placeholder="请输入验证码" v-model="yzm">
            </div>
            <button class="login" @click="GoLogin">现在登录</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { LOGIN } from '../api'
import { useRouter, useRoute } from 'vue-router'
let route = useRoute()
let router = useRouter()
let phone = ref('')
let password = ref('')
let yzm = ref('')

// 跳转到注册页
function GoRegister() {
    router.push({
        path: 'register'
    })
}

// 跳转到登录后的页面
function GoLogin() {
    if(!phone.value||!password.value) {
        alert('请输入用户名和密码')
        return
    }

    let params = {
        phone: phone.value,
        password: password.value
    }
    LOGIN(params).then(res=>{
        let data = res.data.data
        if(res.status==200){
            sessionStorage.setItem('token',data.token)
            router.push({path:'/homeView'})
        }
    }).catch(err=>{
        console.log(err);
    })


}
</script>

<style scoped lang="less">
.box {
    width: 100vw;
    height: 100%;
    display: flex;
    color: aliceblue;
    justify-content: center;

    .left {
        flex: 1;
        background: linear-gradient(180.83deg, #3CB09E 0%, #2BC17B 100%);

        .text {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .text-h {
                width: 347px;
                height: 53px;
                opacity: 1;
                /** 文本1 */
                font-size: 36px;
                font-weight: 400;
                letter-spacing: 5px;
                line-height: 52.13px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                vertical-align: top;
            }

            .text-t {
                width: 347px;
                height: 34px;
                opacity: 1;
                padding-top: 30px;
                /** 文本1 */
                font-size: 18px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 34px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                vertical-align: top;
            }

            .text-d {
                width: 126px;
                height: 27px;
                margin-top: 50px;
                opacity: 1;
                /** 文本1 */
                font-size: 18px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 26.06px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                vertical-align: top;
                border: 1px solid #fff;
                padding: 15px;
                border-radius: 25px;

            }
        }



    }

    .right {
        flex: 2;

        .text-nav {
            text-align: center;
            opacity: 1;
            /** 文本1 */
            font-size: 42px;
            font-weight: 400;
            letter-spacing: 5px;
            line-height: 60.82px;
            color: rgba(43, 193, 123, 1);
            text-align: center;
            vertical-align: top;
        }

        div {
            width: 455px;
            height: 65px;
            border-radius: 5px;
            background: #F5F9FA;
            border: 0;
            margin: 55px auto;
            line-height: 65px;

            input {
                width: 80%;
                margin-left: 20px;
                border: 0;
                background: transparent;
                outline: none;
            }
        }

        .login {
            display: block;
            margin: auto;
            width: 255px;
            margin-top: 125px;
            height: 65px;
            opacity: 1;
            border: 0;
            border-radius: 32.5px;
            background: #2BC17B;
        }
    }

    .icon-yanzhengyanzhengma:before {
        content: "\e624";
        color: #000;
    }

    .icon-jyonghu3:before {
        content: "\e63c";
        color: #000;
    }

    .icon-mima:before {
        content: "\e8b2";
        color: #000;
    }

    .icon-tushu:before {
        content: "\e60e";
        color: #000;
    }
}
</style>