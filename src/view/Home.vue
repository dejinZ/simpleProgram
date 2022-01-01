<template>
    <div id="home">
        <header class="nav">
            <div class="nav-box">
                <div className="nav-logo">
                    简程序
                </div>
                <div className="nav-item">
                    <ul>
                        <li @click="jumpPage('/Resources')" >题库</li>
                        <li @click="jumpPage('/QuestionBank')">资源</li>
                        <li @click="jumpPage('/Record')">笔记</li>
                    </ul>
                    <div>
                        <input placeholder="搜索" />
                    </div>
                </div>
            </div>
        </header>
       
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return {}
        },
        methods:{
            jumpPage(url){
                this.$router.push(url)
            },
        }
    }

</script>
<style lang="less" scoped>   
 #home{
    .nav{
        background-color: #f4f4f4;
        .nav-box{
            width: 13rem;
            margin: auto;
            height: 0.5rem;
            line-height: 0.5rem;
            display: flex;
            flex-direction: row;
            .nav-logo{
                width: 3rem;
            }
            .nav-item{
                display: flex;
                flex-direction: row;
                ul{
                    display: flex;
                    flex-direction: row;
                    li{
                        cursor: pointer;
                        font-size: 0.16rem;
                        width: 1rem;
                        text-align: center;
                    }
                    li:hover{
                        color: #a5a5a5;
                    }
                }
            }
        }
    }
} 
   
</style>