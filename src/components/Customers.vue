/* eslint-disable no-alert, no-console */
<style>

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFF;

}

.reptileList {
    list-style: none;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 50vw;
    margin-bottom: 2vw;
}

</style>

<template>

<div style="height:100%;">

  <MainTemplate>

    <template slot="header">
      Клиенты
    </template>
    <template slot="main">
      <SearchBar />      
      <div v-for="(customer, index) in customers" :key="`customerCard-${index}`">>
        <CustomerCard :customer="customer"/>
      </div>

        <addCustomer />



    </template>
  </MainTemplate>


</div>

</template>

<script>

import {db} from '@/components/firebaseInit'
import Menu from '@/components/Menu';
import slide from '@/components/Slide';
import SearchBar from '@/components/SearchBar';
import AddCustomer from '@/components/addCustomer';
import MainTemplate from '@/components/MainTemplate';
import CustomerCard from '@/components/CustomerCard';
export default {
    name: 'customers',
    data() {
        return {
            customers: []

        }
    },
    firestore() {
        return {
            customers: db.collection('customers')

        }
    },
    components: {
          MainTemplate,
          slide,
          CustomerCard,
          SearchBar,
         'addCustomer' :AddCustomer
    },
    methods: {


    }
}

</script>
