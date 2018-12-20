<style>
.addCustomerCard {
  width: 100%;
}
</style>
<template>
  <div>
    <el-card class="box-card addCustomerCard">
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
  </div>
</template>
<script>
import {db} from '@/components/firebaseInit'
export default {
    name: 'addCustomer',
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
            }

        }
    },
    methods: {
        addData: function(form) {
            const createdAt = new Date()

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


        }
      }
}


</script>
