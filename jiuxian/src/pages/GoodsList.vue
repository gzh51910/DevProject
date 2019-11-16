<template>
  <div style="padding:20px">
      <el-table
      :data="aaa"
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="commonProductInfo.pname"
        label="商品名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="commonProductInfo.actPrice"
        label="价格">
      </el-table-column>
    </el-table>
                
    <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>
<script>
// import { pseudoRandomBytes } from 'crypto';
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
         {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
         {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
      ],
      aaa: []
    };
  },

  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

  async created() {
    let {
      data: { data: list }
    } = await this.$axios.get("http://localhost:1910/gdlist", {
      params: { gather: "list" }
    });
    this.aaa = list
    console.log(this.aaa);
  }
};
</script>
<style>
.Input-search {
  width: 300px;
  height: 80px;
}
.search-wrap {
  float: right;
}
.pagination {
  width: 200px;
  margin: 0 auto;
}
</style>