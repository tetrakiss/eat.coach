<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">

           <tagsBar v-bind:customerRef="customer['.key']" />
            <span>{{ customer.firstName }} {{ customer.lastName }}</span>
            <span>{{ new Date(customer.dateNextInteraction).toLocaleDateString() }}</span>
            <el-button style="float: right; padding: 5px; margin:5px;" @click.native="deleteIt(customer['.key'])" type="danger">Удалить</el-button>
            <el-button style="float: right; padding: 5px;  margin:5px; " @click.native="viewCustomer(customer)" type="primary">Посмотреть</el-button>
        </div>
        <div class="text item">
            {{customer.email}}
        </div>
    </el-card>
  </div>
</template>
<script>
import {db} from '@/components/firebaseInit'
import TagsBar from '@/components/Tags'
export default {
    name: 'customerCard',
    data() {
        return {
          customer: []
        }
      },
      props: {
        customer: {
          type: [Array],
          required: true
        }
      },
      components: {
        'tagsBar' : TagsBar,
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
          deleteIt: function(customer) {
            db.collection("customers").doc(customer).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
          }
      }
    }

</script>
