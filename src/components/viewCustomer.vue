<template>
  <div class="home">
    <div class="grid-content">
      {{ id }}
      {{ customer.firstName }}
  </div>
  </div>
</template>
<script>
import db from '@/components/firebaseInit'
export default {
  name: 'viewCustomer',
  data () {
    return {
      id: this.$route.params.customer,
      customer: []
    }
  },
  firestore() {
    return {

      customer: db.collection('customers').doc(this.$route.params.customer)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
