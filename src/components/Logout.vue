/* eslint-disable no-alert, no-console */
<template>
  <div>
  <el-button @click="logout" type="warning">Выйти</el-button>
</div>
</template>
<script>
import { auth } from '@/components/firebaseInit'
export default {
  name: 'Logout',
  methods: {
    logout : function() {
      auth.signOut().then(()=>{
        this.$router.replace('login')
      })
    }

  }

}

</script>
