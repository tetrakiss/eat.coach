<template>
  <div class="viewCustomer">
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Контактная информация" name="1">
    <div class="inCatagory"><font-awesome-icon icon="user" class="marginRight"></font-awesome-icon>{{ customer.firstName }} {{customer.lastName}}</div>
    <div  class="inCatagory"><font-awesome-icon icon="mobile-alt" class="marginRight"></font-awesome-icon>{{ customer.phone }}</div>
    <div  class="inCatagory"><font-awesome-icon icon="envelope-open" class="marginRight"></font-awesome-icon>{{ customer.email }}</div>
    <div class="inCatagory"><font-awesome-icon icon="calendar" class="marginRight"></font-awesome-icon>{{ customer.createdAt }}</div>
    <div  class="inCatagory"><font-awesome-icon icon="calendar-check" class="marginRight"></font-awesome-icon>{{ customer.createdAt }}</div>
    <div  class="inCatagory"><el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag.tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ Добавить тег</el-button>
</div>

  </el-collapse-item>
  <el-collapse-item title="Дети" name="2">
    <div class="inCatagory"  v-for="(children, index) in childrens" :key="`children-${index}`">
      <font-awesome-icon icon="user" class="marginRight"></font-awesome-icon>{{ children.name }} Дата рождения: {{children.bday}}  Лет: {{ageClaculate(children.bday)}}  <el-button style="float: right; padding: 5px; margin:5px;" @click="deleteChildren(children)" type="danger" >Удалить</el-button>
    </div>
    <el-form ref="form" :model="children" label-width="15vw">
      <el-form-item label="Имя">
        <el-input v-model="children.name"></el-input>
      </el-form-item>
      <el-form-item label="Дата рождения">
        <el-date-picker
          style="width: 100%;"
          v-model="children.bday"
          type="date"
          format="dd.MM.yyyy"
          value-format="dd.MM.yyyy"
          placeholder="Выберите дату">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="addChildren (children)">Добавить</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
    </el-form>

  </el-collapse-item>
  <el-collapse-item title="Назначения" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Комментарий" name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
  <el-collapse-item title="Диалог" name="5">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>

  </div>
</template>
<script>
import db from '@/components/firebaseInit'
export default {
  name: 'viewCustomer',
  data () {
    return {
      dynamicTags:[],
      inputVisible: false,
      inputValue: '',
      children: {
        name: '',
        bday: ''

      },
      childrens:[],
      activeNames: ['1'],
      id: this.$route.params.customer,
      customer: []
    }
  },
  computed: {
     // геттер вычисляемого значения

   },
  methods: {
    handleClose(tag) {
          db.collection('customers').doc(this.$route.params.customer).collection('tags').doc(tag['.key']).delete();
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
            db.collection('customers').doc(this.$route.params.customer).collection('tags').add({tag: inputValue})
          //this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    ageClaculate: function (bday) {
      console.log(bday);
      var years = new Date(new Date() - new Date(bday)).getFullYear() - 1970;
      return years;
    },

    deleteChildren: function(children) {
      db.collection('customers').doc(this.$route.params.customer).collection('childrens').doc(children['.key']).delete();
    },
      addChildren(children) {
        db.collection('customers').doc(this.$route.params.customer).collection('childrens').add(children)
        .then(function(docRef) {
          

          console.log("Children added with ID: ", docRef.id)
        })
        .catch(function(error) {
           console.error("Error adding children: ", error)
        })
      },
      handleChange(val) {
        console.log(val);
      }
    },
  firestore () {
    return {
      customer: db.collection('customers').doc(this.$route.params.customer),
      childrens: db.collection('customers').doc(this.$route.params.customer).collection('childrens'),
      dynamicTags: db.collection('customers').doc(this.$route.params.customer).collection('tags')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.marginRight {
  margin-right: 15px;
}
.inCatagory {
  text-align: left;
  padding: 10px;
  font-size: 1.2em;
}
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
