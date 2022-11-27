<template>
  <div id="smartTown">
    <h2>新建施工案例</h2>
    <el-table
      :data="tableData"
      style="width: 100%;font-size: 19px;white-space:nowrap;"
      stripe
      fit
      size="medium"
      >>
      <el-table-column prop="num" label="项目类型" align="center">
      </el-table-column>
      <el-table-column prop="pro5" label="新建施工" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "1",

          pro5: "昆钢2#地下消防水池"
        },
        {
          num: "2",

          pro5: "昆明低压配电室土建"
        },
        {
          num: "3",

          pro5: "富宁三层住宅"
        },
        {
          num: "4",

          pro5: "澜沧六层住宅"
        }
      ]
    };
  }
};
</script>
<style scoped>
#smartTown > h2 {
  text-align: center;
  margin-bottom: 50px;
}
</style>
