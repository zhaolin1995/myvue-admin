<template>
    <div class="header-wrap">
        <div class="header-main clearfix">
            <div class="header-left clearfix">
                <!--            折叠伸缩-->
                <div class="header-fold" @click="showfold">
                    <i v-if="isCollapse" class="el-icon-s-unfold"></i>
                    <i v-else class="el-icon-s-fold"></i>


                </div>
                <!--    后台        -->
                <div class="header-text">
                <span>
                     欢迎来到{{headerText}}后台管理系统
                </span>

                </div>
            </div>

            <!--            右侧-->
            <div class="header-right clearfix">
                <div class="header-message">
                    <i class="el-icon-bell"></i>
                    <span class="circle"></span>
                </div>
                <div class="header-img">
                    <img src="../assets/img/login-logo.png" alt="">
                </div>
                <div class="header-username">

                </div>
                <div class="header-type">
                    <el-dropdown>
  <span class="el-dropdown-link">
       {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
                        <el-dropdown-menu slot="dropdown" class="top40">
                            <el-dropdown-item>项目链接</el-dropdown-item>
                            <el-dropdown-item>
                                <span @click="loginOut" command="loginOut" >退出登录</span>
                                </el-dropdown-item>

                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

                <div class="more">
                    <i @click="drawer = true" class="iconfont icon-zlgengduo"></i>
                    <el-drawer
                            class="more-text"

                            title="我是标题"
                            :visible.sync="drawer"
                            :with-header="false">
                        <span>我来啦!</span>
                    </el-drawer>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                headerText: 'XXX',
                name: 'XXX',
                isCollapse: false,
                drawer: false,
            }
        },
        methods:{
            showfold(){
                this.isCollapse = !this.isCollapse
            },
            loginOut(){

                localStorage.removeItem("login_username")
                this.$router.push('/login')

            }
        },
        computed:{
            username(){
                const username = localStorage.getItem('login_username')
                return username ? username : this.name
            }
        }

    }
</script>

<style scoped>
    .header-wrap {
        height: 60px;
        width: 100%;
        background: #20222A;
        line-height: 60px;
        cursor: pointer;
        color: #fff;
    }

    .header-main {

        padding: 0 30px;
    }

    .header-fold {
        float: left;
        margin-right: 20px;
    }

    .header-text {
        float: left;
    }

    .header-text span {
        font-size: 16px;
        font-weight: bold;
    }

    .header-left {
        float: left;
    }

    .header-right {
        float: right;
    }

    .header-right div {
        float: left;
    }
.header-message {
    position: relative;
    font-size: 18px;
    line-height: 60px;
}
   .header-message .circle{
        position: absolute;
        top: 18px;
        left: 15px;
        width: 8px;
        height: 8px;
       background: #f00;
       border-radius: 50%;
       z-index: 99;
    }
    .header-img {
        width: 40px;
        height: 40px;
        margin: 0 40px;
        border: 1px solid #666666;
        border-radius: 50%;
        overflow: hidden;
        margin-top:10px ;
    }

    .header-img img {
        width: 100%;
        height: 100%;
    }

    .top40 {
        top: 40px !important;
    }
    .el-dropdown-link{
        color: #fff;
    }
    .more{
        margin-left: 10px;

    }
    .more-text{
        color: #000;color: #000;color: #000;
    }
    .el-drawer__body{
        width: 100px !important;
    }
</style>