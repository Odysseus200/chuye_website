<template>
  <div id="smartTown"> <h2>加固施工案例</h2> <el-table :data="tableData" style="width: 100%;font-size: 19px;white-space:nowrap;" stripe fit size="medium" >> <el-table-column prop="num" label="序号" align="center" width="70px"> </el-table-column> <el-table-column prop="pro3" label="项目地点" align="center" show-overflow-tooltip > </el-table-column> </el-table> </div>
</template>
<script>
export default {
  name: "smartTown",
  data() {
    return {
      tableData: [{num: "1", pro3: "海埂会议中心加固工程"},{num: "2", pro3: "普洱镇沅人民医院加固工程"},{num: "3", pro3: "大理下关烟厂加固工程"},{num: "4", pro3: "盘龙区大辰学校教学楼加固工程"},{num: "5", pro3: "翠湖南路私人商铺改造加固工程"},{num: "6", pro3: "溪鹿南郡电梯改造加固工程"},{num: "7", pro3: "中石化新增提升机加固工程"},{num: "8", pro3: "楚雄双柏县人民医院住院楼加固工程"},{num: "9", pro3: "昆明环城第一小学加固工程"},{num: "10", pro3: "大理龙龛客栈加固工程"},{num: "11", pro3: "世博花园酒店小楼纠偏加固工程"},{num: "12", pro3: "云溪小学教师宿舍加固工程"},{num: "13", pro3: "安宁公安局A栋加固工程"},{num: "14", pro3: "金沙古镇C1栋加固工程"},{num: "15", pro3: "滇池明珠广场3号楼加固工程"},{num: "16", pro3: "云投生态办公楼加固工程"},{num: "17", pro3: "昆明XX部队梁开孔加固工程"},{num: "18", pro3: "怒江江东财富中心商住综合楼加固工程"}]
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
