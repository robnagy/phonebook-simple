<template>
  <el-table
    ref="singleTable"
    :data="data"
    :default-sort="{'prop':'name', order:'ascending'}"
    :empty-text="message"
    highlight-current-row
    style="width: 100%"
    >

    <!-- <el-table-column type="index" width="55" sortable>
    </el-table-column> -->
    <el-table-column label="Name" prop="name"  sortable>
    </el-table-column>
    <el-table-column label="Phone" prop="phone_number" sortable>
    </el-table-column>
    <el-table-column label="Address" prop="address" width="400" sortable align="right">
    </el-table-column>
    </el-table>

</template>
<script>
export default {
  props: ['data', 'error'],
  data() {
    return {
      loading: 'Data loading',
    }
  },
  computed: {
    message() {
      if (this.error.length > 0)
        return this.error;
      return this.loading;
    }
  }
}
</script>

