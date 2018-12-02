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
  width: 100%;
  background: #333333;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #ed4d3d, #333333);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ed4d3d, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
