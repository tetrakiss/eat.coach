/* eslint-disable no-alert, no-console */
<style>
.logo {
  width: 20vw;
  padding-top: 10vw;
  padding-bottom: 10vw;
}
.main {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  height: 100%;
  background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  background: linear-gradient(to bottom,  rgba(237,77,61,0.9), rgba(51,51,51,0.9)), url("../assets/bg.jpg") ;
  background: -webkit-linear-gradient(to bottom,  rgba(237,77,61,0.9), rgba(51,51,51,0.9)) ,url("../assets/bg.jpg");

}
</style>
<template>
  <div class="main">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="24" style="text-align: center;">
          <img class="logo" src="@/assets/logo-white.svg" />
          </el-col>
      </el-row>

    <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="14">

    <el-form ref="form" :model="LoginForm" label-width="120px">
      <input v-model="LoginForm.email"  class="eatInput" type="text" placeholder="hello@mail.com"/>
      <input v-model="LoginForm.pass"  class="eatInput" type="password" placeholder="******" autocomplete="off"/>


        <el-button  class="redButton" @click="onSubmit">Войти</el-button>

    </el-form>


  </el-col>
</el-row>


</div>
</template>
<script>
import '@/assets/theme/eatTheme.css'
import { auth } from '@/components/firebaseInit'
export default {
  name: 'Login',
   data() {
     return {
       LoginForm: {
         email: '',
         pass: ''
       }
     }
   },
   methods: {
     onSubmit() {
       auth.signInWithEmailAndPassword(this.LoginForm.email, this.LoginForm.pass).then(
         (user)=>{
           this.$router.replace('dashboard')
         },
         (error) =>
         {
           alert("UPS"+ error.message)
         }
       );
     }
   }
 }
</script>
