/* eslint-disable */
<template>
  <div id="app">


    <el-card class="box-card" v-for="(customer, index) in customers" :key="`customer-${index}`" >
  <div slot="header" class="clearfix">
    <span>{{ customer.firstName }} {{ customer.lastName }}</span>
    <el-button style="float: right; padding: 5px; margin:5px;" @click="deleteCustomer(customer)" type="danger" >Удалить</el-button>
      <el-button style="float: right; padding: 5px;  margin:5px; " @click="viewCustomer(customer)" type="primary" >Посмотреть</el-button>
  </div>
  <div  class="text item">
  {{customer.email}}
  </div>
</el-card>
<el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span>Добавить нового клинета</span>
  </div>
  <div  class="text item">
    <el-form ref="form" :model="form" label-width="15vw">
      <el-form-item label="Имя">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Фамилия">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Телефон">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="Skype">
        <el-input v-model="form.skype"></el-input>
      </el-form-item>
      <el-form-item label="Дата последнего контакта">
        <el-date-picker
          style="width: 100%;"
          v-model="dateInteraction"
          type="date"
          format="dd-MM-yyyy"
          placeholder="Выберите дату">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <el-form-item>
    <el-button type="primary" @click="addCustomer (firstName, lastName, email, phone, skype, dateInteraction)">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
    <form >
      <el-row :gutter="20">
<el-col :span="6" ><el-input v-model="firstName" placeholder="Имя"></el-input></el-col>
<el-col :span="6" ><el-input v-model="lastName" placeholder="Фамилия"></el-input></el-col>
<el-col :span="6" ><el-input v-model="email" placeholder="email"></el-input></el-col>
<el-col :span="6" ><el-input v-model="phone" placeholder="телефон"></el-input></el-col>
<el-col :span="6" ><el-input v-model="skype" placeholder="skype"></el-input></el-col>
<el-col :span="6" ><el-date-picker
  v-model="dateInteraction"
  type="date"
  format="dd-MM-yyyy"
  placeholder="Выберите дату">
</el-date-picker></el-col>
<el-col :span="6" > <el-button type="primary" @click="addCustomer (firstName, lastName, email, phone, skype, dateInteraction)">Create</el-button> </el-col>
</el-row>
</form>

  </div>
</el-card>


  </div>
</template>

<script>
  import db from '@/components/firebaseInit'
  import datePicker from '@/components/datePicker'

  export default {
    name: 'customers',
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          phone: '',
          skype: '',
          email: ''

        },

        customers: [],
        newReptile: '',
        dateInteraction: Date()
      }
    },
    firestore () {
      return {

        customers: db.collection('customers'),
      }
    },
    components: {
    'eat-datePicker': datePicker,

  },
    methods: {

      viewCustomer:function(customer){
        this.$router.push({name:'viewCustomer',params:{customer:customer['.key']}});
      },
      addCustomer (firstName, lastName, email, phone, skype, dateInteraction) {
     const createdAt = new Date()
     db.collection('customers').add({ firstName, lastName, email, phone, skype, dateInteraction, createdAt })
      },
      deleteCustomer: function(customer) {
        this.$firestore.customers.doc(customer['.key']).delete();
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
