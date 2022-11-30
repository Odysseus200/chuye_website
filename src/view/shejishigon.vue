<template>
  <div id="smartTown">
    <h2>加固设计施工案例</h2>
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
        prop="pro2"
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

          pro2: "昆明西山海埂旅游索道站加固工程"
        },
        {
          num: "2",

          pro2: "昆阳镇主厂房改造加固工程"
        },
        {
          num: "3",

          pro2: "澄江入户玻璃及雨棚加固工程"
        },
        {
          num: "4",

          pro2: "大理永平商铺加固工程"
        },
        {
          num: "5",

          pro2: "昆明大成学校增设钢楼梯加固工程"
        },
        {
          num: "6",

          pro2: "个旧市福家营加油站加固工程"
        },
        {
          num: "7",

          pro2: "和谐世纪商铺增设夹层改造加固工程"
        },
        {
          num: "8",

          pro2: "原武定县地方税务局办公楼地梁加固工程"
        },
        {
          num: "9",

          pro2: "武定县三层砌体结构增加层高加固工程"
        },
        {
          num: "10",

          pro2: "祥云县清华洞油库改造加固工程"
        },
        {
          num: "11",

          pro2: "曲靖潇湘街道水务所剪力墙加固工程 "
        },
        {
          num: "12",

          pro2: "玉溪新平北京银行分行加固工程"
        },
        {
          num: "13",

          pro2: "昭通彝良洛泽河镇国土资源服务中心加固工程"
        },
        {
          num: "14",

          pro2: "昭通农产品安全检测中心加固工程"
        },
        {
          num: "15",

          pro2: "昆勘院冬青里4号小区配电室加固工程"
        },
        {
          num: "16",

          pro2: "昭通私人小宗地块建设项目加固工程"
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
