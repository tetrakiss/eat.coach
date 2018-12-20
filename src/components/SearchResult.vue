<template>
  <div>
    <MainTemplate>

      <template slot="header">
        Вы искали : {{ inputSearch }}
      </template>
      <template slot="main">
        <div v-for="(customer, index) in customers" :key="`customerCard-${index}`">>
          <CustomerCard :customer="customer"/>
        </div>
      </template>
    </MainTemplate>   

</div>
</template>
<script>
import {db} from '@/components/firebaseInit'
import CustomerCard from '@/components/CustomerCard';
import MainTemplate from '@/components/MainTemplate';
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
         MainTemplate,
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
