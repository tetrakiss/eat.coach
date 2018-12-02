<template>
  <div>
<el-form ref="form" :model="LoginForm" label-width="120px">
  <el-form-item label="email">
      <el-input v-model="LoginForm.email"></el-input>
    </el-form-item>
<el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="LoginForm.pass" autocomplete="off"></el-input>
</el-form-item>
<el-form-item>
    <el-button type="primary" @click="onSubmit">Войти</el-button>

</el-form-item>

</el-form>
</div>
</template>
<script>

import { auth } from '@/components/firebaseInit'
export default {
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
