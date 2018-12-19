
<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .searchBar {
    margin-bottom: 20px;
  }
</style>

<template>
  <div>
    <div style="margin-top: 15px;">
  <el-input placeholder="Поиск" v-model="inputSearch" class="input-with-select searchBar">
    <el-select v-model="typeSearch" slot="prepend" placeholder="Select">      
      <el-option label="Имя" value="firstName"></el-option>
      <el-option label="Фамилия" value="lastName"></el-option>
      <el-option label="Телефон" value="phone"></el-option>
      <el-option label="Email" value="email"></el-option>
      <el-option label="Дата следующего контакта" value="dateNextInteraction"></el-option>
    </el-select>
    <el-button slot="append"  @click="search" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </div>
</template>



<script>

import {db} from '@/components/firebaseInit'

export default {
    name: 'searchBar',
    data() {
        return {
            inputSearch: '',
            typeSearch:'lastName'

        }
    },
    methods: {
       search: function () {
         this.$router.push({
             name: 'searchResult',
             params: {
                 inputSearch: this.inputSearch,
                 typeSearch: this.typeSearch
             }
         });
       }

      }
}
</script>
