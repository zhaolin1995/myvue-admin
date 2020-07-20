<template>
    <div class="wrapper">
        <div class="login-wrapper">
            <div class="login-box">
                <div class="login-logo">
                    <img src="../assets/img/login-logo.png" alt="">
                    <span>后台管理系统</span>
                </div>
                <div class="login-form">
                    <el-form :model="rules" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item prop="username">
                            <el-input type="text" v-model="params.username" autocomplete="off">
                                <el-button slot="prepend" icon="icon-zlyonghu"></el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="params.paswword" autocomplete="off">
                                <el-button slot="prepend" icon="icon-zlmima"></el-button>
                            </el-input>
                        </el-form-item>


                    </el-form>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitLogin()">登录</el-button>
                    </div>
                    <div class="tip">
                        <span>Tips : 该后台账号密码，只要填写即可登录</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                params: {
                    username: 'admin',
                    paswword: 123456
                },
                rules: {
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'},

                    ], password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},

                    ],
                }
            }
        },
        methods: {
            submitLogin() {
                this.$refs.ruleForm.validate((vaild) => {
                   if(vaild){
                       this.$notify({
                           title: '登录成功',
                           message: '欢迎来到**后台管理',
                           type: 'success'
                       });
                       localStorage.setItem('login_username',this.params.username)
                       this.$router.push('/')
                   }
                })
            }
        }
    }
</script>

<style scoped>
    .login-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("../assets/img/login-img.jpg");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .login-box {
        position: absolute;
        left: 50%;
        top: 30%;
        -webkit-transform: translate(-50% -30%);
        -moz-transform: translate(-50% -30%);
        -ms-transform: translate(-50% -30%);
        -o-transform: translate(-50% -30%);
        transform: translate(-50% -30%);
        width: 400px;
        background: #fff;
        box-sizing: border-box;
    }

    .login-logo {
        padding-top: 20px;
        width: 100%;
        height: 50px;
        text-align: center;

    }

    .login-logo img {
        width: 50px;
        height: 100%;
        vertical-align: middle;
    }

    .login-logo span {
        display: inline-block;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
    }

    .login-form {
        padding: 20px 50px 50px 50px;
    }

    .login-btn > .el-button {
        width: 100%;
    }

    .tip span {
        font-size: 12px;
        line-height: 30px;
    }
</style>