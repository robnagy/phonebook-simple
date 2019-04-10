<template>
  <div>
    <el-row>
      <h2>Phone Book</h2>
    </el-row>
    <el-row>
      <el-col :span="4" :offset="10">
        <el-input placeholder="Filter all fields" v-model="filter"></el-input>
      </el-col>
    </el-row>
    <el-row>
       <el-col :span="16" :offset="4">
        <PhoneBookTable :data="filteredContacts" :error="contactsErrorMessage">
        </PhoneBookTable>   
       </el-col>
    </el-row>
  </div>
</template>

<script>
import FetchContactsMixin from '../mixins/fetchContactsMixin';
import PhoneBookTable from './PhoneBookTable.vue';

export default {
  components: { PhoneBookTable },
  mixins: [ FetchContactsMixin ],
  props: ['msg'],
  data() {
    return {
      filter: '',
    }
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(o =>
          Object.keys(o).some(k => o[k].toLowerCase().includes(this.filter.toLowerCase())));
    }
  },
}
</script>
