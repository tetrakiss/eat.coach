<template>
  <div>
    <el-card class="box-card">
  <div>
    Результаты поиска для : {{ inputSearch }}
  </div>
</el-card>
  <div v-for="(customer, index) in customers" :key="`customerCard-${index}`">>
    <CustomerCard :customer="customer"/>
  </div>
</div>
</template>
<script>
import {db} from '@/components/firebaseInit'
import CustomerCard from '@/components/CustomerCard';
export default {
    name: 'searchResult',
    data() {
        return {
            inputSearch: this.$route.params.inputSearch,
            typeSearch: this.$route.params.typeSearch,
            customers: []
        }
    },
    computed: {

    },
    components: {
         CustomerCard
    },
    methods: {

    },
    firestore() {
        return {
              customers: db.collection('customers').where(this.typeSearch, "==", this.inputSearch)       


        }
    }
}

</script>
