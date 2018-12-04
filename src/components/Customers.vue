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
      <main id="page-wrap">
        <el-card class="box-card" v-for="(customer, index) in customers" :key="`customer-${index}`">
            <div slot="header" class="clearfix">

               <tagsBar v-bind:customerRef="customer['.key']" />
                <span>{{ customer.firstName }} {{ customer.lastName }}</span>
                <span>{{ new Date(customer.dateNextInteraction).toLocaleDateString() }}</span>
                <el-button style="float: right; padding: 5px; margin:5px;" @click="deleteCustomer(customer)" type="danger">Удалить</el-button>
                <el-button style="float: right; padding: 5px;  margin:5px; " @click="viewCustomer(customer)" type="primary">Посмотреть</el-button>
            </div>
            <div class="text item">
                {{customer.email}}
            </div>
        </el-card>
        <addCustomer />


      </main>
    </template>
  </MainTemplate>


</div>

</template>

<script>

import {db} from '@/components/firebaseInit'
import Menu from '@/components/Menu';
import slide from '@/components/Slide';
import TagsBar from '@/components/Tags'
import AddCustomer from '@/components/addCustomer';
import MainTemplate from '@/components/MainTemplate';
export default {
    name: 'customers',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                skype: '',
                email: '',
                createdAt: new Date(),
                dateInteraction: new Date(),
                dateNextInteraction:new Date(Date.now()+7*24*60*60*1000)
            },

            customers: []

        }
    },
    firestore() {
        return {
            customers: db.collection('customers')
            /*customers: db.collection('customers').then(
              (snapshot) => {
                snapshot.docs.forEach((doc) => {
                  const tags = doc.data()
                  customers.push(tags)
                })
            })*/
        }
    },
    components: {
          MainTemplate,
          slide,
         'tagsBar' : TagsBar,
         'addCustomer' :AddCustomer
    },
    methods: {
        viewCustomer: function(customer) {
            this.$router.push({
                name: 'viewCustomer',
                params: {
                    customer: customer['.key']
                }
            });
        },
        deleteCustomer: function(customer) {
            this.$firestore.customers.doc(customer['.key']).delete();
        }
    }
}

</script>
