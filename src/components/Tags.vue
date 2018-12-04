/* eslint-disable no-alert, no-console */
<style scoped>

.el-tag, .el-tag + .el-tag {
  background-color: rgba(237,77,61,0.8);
  border: 1px solid rgba(237,77,61,1);
    margin-left: 10px;
}
.el-icon-close:hover {
  background-color: darkred !important;
}
 .el-icon-close {
  color: darkred !important;
}
.el-tag a, .el-tag a:visited, .el-tag a:hover {
  text-decoration: none;
  color: white;
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
</style>
<template>
<div>
  <el-tag :key="`tag-${index}`" v-for="(tag, index) in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
      <a href="#" @click.prevent="searchByTag(tag.tag)">{{tag.tag}}</a>
  </el-tag>
  <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="mini" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
  </el-input>
  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Добавить тег</el-button>
</div>

</template>

<script>
import {db} from '@/components/firebaseInit'
    export default {
      name: 'TagsBar',
      data() {
        return {
          dynamicTags: [],
          inputVisible: false,
          inputValue: '',
        };
      },
      props: {
        customerRef: {
          type: [String],
          required: true
        }
      },
      methods: {
            searchByTag(tag)  {
              console.log("redirect to search with " + tag)
              this.$router.push({
                  name: 'search',
                  params: {
                      tag: tag
                  }
              });
            },
            handleClose(tag) {
                    db.collection('customers').doc(this.customerRef).collection('tags').doc(tag['.key']).delete();
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
                        db.collection('customers').doc(this.customerRef).collection('tags').add({
                                tag: inputValue
                            })
                            //this.dynamicTags.push(inputValue);
                    }
                    this.inputVisible = false;
                    this.inputValue = '';
                }
      },
      firestore() {
          return {
              dynamicTags: db.collection('customers').doc(this.customerRef).collection('tags')
          }
      }
    }
</script>
