<template>
    <div class="main">
        <div class="container">
            <div class="login-left">
                <div class="edu">
                    <!-- <img src="../../public/0.png" alt=""> -->
                    <p>教育管理系统</p>
                </div>
                <div class="center">
                    <h3>欢迎回来</h3>
                    <p>水静流深，涂歌巷舞</p>
                </div>
                <!-- <img class="bg1" src="../../public/1.png" alt="">
                <img class="bg2" src="../../public/2.png" alt="">
                <img class="bg3" src="../../public/3.png" alt="">
                <img class="bg4" src="../../public/4.png" alt=""> -->
            </div>
            <div class="login-right">
                <div class="right-con">
                    <h3>后台注册</h3>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入姓氏" v-model="firstName">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入名称" v-model="lastName">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入邮箱地址" v-model="email">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入手机号" v-model="phone">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入地址" v-model="address">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入年龄" v-model="age">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入英文名字" v-model="englishName">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入角色" v-model="role">
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="请输入简介" v-model="desc">
                    </div>
                    <div class="inputBox">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="btn" @click="submit">提交</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { REGISTER } from '../api'
let router = useRouter();
let firstName = ref('')
let lastName = ref('')
let email = ref('')
let phone = ref('')
let address = ref()
let age = ref()
let englishName = ref('')
let role = ref('')
let desc = ref('')
let password = ref('')


function submit() {
    let params = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        englishName: englishName.value,
        age: age.value,
        role: role.value,
        desc: desc.value,
        password: password.value
    }
    REGISTER(params).then(res=>{
        console.log(res);
        if(res.status==200){
            alert('注册成功')
            router.push({path:'/'});
        }
    }).catch(err=>{
        console.log(err); 
    })

}
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: rgba(245, 249, 250, 1);

    .container {
        width: 1200px;
        height: 903px;
        border-radius: 10px;
        display: flex;
        background-color: rgba(255, 255, 255, 1);

        .login-left {
            flex: 1;
            color: #fff;
            height: inherit;
            background: linear-gradient(rgba(60, 176, 158, 1), rgba(43, 193, 123, 1));
            position: relative;

            .edu {
                display: flex;
                align-items: center;
                padding: 10px;

                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 5px;
                }

                p {
                    font-size: 30px;
                }
            }

            .center {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                h3 {
                    font-size: 36px;
                    font-weight: 400;
                    letter-spacing: 5px;
                    line-height: 52px;
                    text-align: center;
                    margin-top: 200px;
                }

                p {
                    font-size: 18px;
                    font-weight: 400;
                    text-align: center;
                    line-height: 34px;
                }
            }

            .bg1 {
                position: absolute;
                right: 20px;
                top: 50px;
            }

            .bg2 {
                position: absolute;
                right: 0;
                top: 40%;
            }

            .bg3 {
                position: absolute;
                bottom: 60px;
                right: 40px;
            }

            .bg4 {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 150px;
                height: 150px;
            }
        }

        .login-right {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;

            .right-con {
                display: flex;
                flex-direction: column;
                align-items: center;

                h3 {
                    font-size: 42px;
                    font-weight: 400;
                    line-height: 60px;
                    text-align: center;
                    margin-bottom: 20px;
                    color: rgba(43, 193, 123, 1);
                }

                .inputBox {
                    width: 455px;
                    height: 30px;
                    background-color: rgba(245, 249, 250, 1);
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    margin: 10px 0;
                    padding: 5px 0;

                    input {
                        border: none;
                        outline: none;
                        font-size: 16px;
                        padding-left: 20px;
                        background-color: transparent;
                        color: rgba(204, 204, 204, 1);
                    }

                    ::-webkit-input-placeholder {
                        color: rgba(204, 204, 204, 1);
                    }

                    :-moz-placeholder {
                        color: rgba(204, 204, 204, 1);
                    }

                    ::-moz-placeholder {
                        color: rgba(204, 204, 204, 1);
                    }

                    :-ms-input-placeholder {
                        color: rgba(204, 204, 204, 1);
                    }
                }

                .btn {
                    color: #fff;
                    border-radius: 30px;
                    padding: 5px 30px;
                    font-size: 20px;
                    margin-top: 20px;
                    background-color: rgba(43, 193, 123, 1);
                }
            }

        }
    }
}
</style>