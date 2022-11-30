<template>
  <div id="smartTown">
    <h2>新建设计案例</h2>
    <el-table
      :data="tableData"
      style="width: 100%;font-size: 19px;white-space:nowrap;"
      stripe
      fit
      size="medium"
      >>
      <el-table-column prop="num" label="序号" align="center" width="70px">
      </el-table-column>
      <el-table-column
        prop="pro4"
        label="项目地点"
        align="center"
        show-overflow-tooltip
      >
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

          pro4: "盈江那邦口岸联检楼配套查验货场"
        },
        {
          num: "2",

          pro4: "晋宁盘龙寺财神殿"
        },
        {
          num: "3",

          pro4: "昆钢水泥助磨剂和混凝土外加剂厂房"
        },
        {
          num: "4",

          pro4: "孟定XX部队公寓房"
        },
        {
          num: "5",

          pro4: "勐腊边防部队住宅"
        },
        {
          num: "6",

          pro4: "昆钢建材行车桩基础"
        },
        {
          num: "7",

          pro4: "沾溢花山军分区宿舍"
        },
        {
          num: "8",

          pro4: "普洱军分区食堂、宿舍"
        },
        {
          num: "9",

          pro4: "云南省军区边防团家属公寓"
        },
        {
          num: "10",

          pro4: "云南省军区金平边防五团家属公寓"
        },
        {
          num: "11",

          pro4: "昆明福善寺基础工程"
        },
        {
          num: "12",

          pro4: "云南印象售楼部"
        },
        {
          num: "13",

          pro4: "武定县狮子山牌坊"
        },
        {
          num: "14",

          pro4: "文山三七加工厂"
        },
        {
          num: "15",

          pro4: "临沧凤庆红茶城"
        },
        {
          num: "16",

          pro4: "昆明难庵寺重建工程"
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
