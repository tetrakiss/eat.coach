<style>

#app {
    font-family: 'Ubuntu', sans-serif;
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
  <slide />
  <main id="page-wrap">
    <el-card class="box-card" v-for="(customer, index) in customers" :key="`customer-${index}`">
        <div slot="header" class="clearfix">

            <span>{{ customer.firstName }} {{ customer.lastName }}</span>
            <span>{{ new Date(customer.dateNextInteraction).toLocaleDateString() }}</span>
            <el-button style="float: right; padding: 5px; margin:5px;" @click="deleteCustomer(customer)" type="danger">Удалить</el-button>
            <el-button style="float: right; padding: 5px;  margin:5px; " @click="viewCustomer(customer)" type="primary">Посмотреть</el-button>
        </div>
        <div class="text item">
            {{customer.email}}
        </div>
    </el-card>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Добавить нового клинета</span>
        </div>
        <div class="text item">
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
                    <el-date-picker style="width: 100%;" v-model="form.dateInteraction" type="date" format="dd.MM.yyyy"  placeholder="Выберите дату">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Дата следующего контакта">
                    <el-date-picker style="width: 100%;" v-model="form.dateNextInteraction" type="date" format="dd.MM.yyyy"  placeholder="Выберите дату">
                    </el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="addData (form)">Создать</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>

  </main>
</div>

</template>

<script>

import {db} from '@/components/firebaseInit'
import datePicker from '@/components/datePicker'
import Menu from '@/components/Menu';
import slide from '@/components/Slide';

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
        }
    },
    components: {
        'eat-datePicker': datePicker,
         slide

    },
    methods: {
        addData: function(form) {
            const createdAt = new Date()
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            };
            //form.createdAt = createdAt.toLocaleDateString()

            db.collection('customers').add(form).then(
              (docRef)=>{
                this.$router.push({
                    name: 'viewCustomer',
                    params: {
                        customer: docRef.id
                    }
                });
              },
              (error) =>
              {
                alert("Error adding customer: "+ error.message)
              }
            );


        },

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
