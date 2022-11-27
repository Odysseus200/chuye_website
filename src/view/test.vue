<template>
  <el-table
    :data="tableData"
    style="width: 100%;font-size: 19px;white-space:nowrap;"
    stripe
    fit
    size="medium"
    >>
    <el-table-column prop="num" label="项目类型" align="center">
    </el-table-column>
    <el-table-column prop="pro1" label="加固设计" align="center">
    </el-table-column>
    <el-table-column prop="pro2" label="加固设计施工" align="center">
    </el-table-column>
    <el-table-column prop="pro3" label="加固施工" align="center">
    </el-table-column>
    <el-table-column prop="pro4" label="新建设计" align="center">
    </el-table-column>
    <el-table-column prop="pro5" label="新建施工" align="center">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "1",
          pro1: "昆明霖岚国际广场改造加固工程",
          pro2: "昆明西山海埂旅游索道站加固工程",
          pro3: "海埂会议中心加固工程",
          pro4: "盈江那邦口岸联检楼配套查验货场",
          pro5: "昆钢2#地下消防水池"
        },
        {
          num: "2",
          pro1: "弥勒湖泉金秋旅游小镇加固工程",
          pro2: "昆阳镇主厂房改造加固工程",
          pro3: "普洱镇沅人民医院加固工程",
          pro4: "晋宁盘龙寺财神殿",
          pro5: "昆明低压配电室土建"
        },
        {
          num: "3",
          pro1: "昆明霖岚国际广场改造加固工程",
          pro2: "澄江入户玻璃及雨棚加固工程",
          pro3: "大理下关烟厂加固工程",
          pro4: "昆钢水泥助磨剂和混凝土外加剂厂房",
          pro5: "富宁三层住宅"
        },
        {
          num: "4",
          pro1: "楚雄调度用电综合楼加固工程",
          pro2: "大理永平商铺加固工程",
          pro3: "盘龙区大辰学校教学楼加固工程",
          pro4: "孟定XX部队公寓房",
          pro5: "澜沧六层住宅"
        },
        {
          num: "5",
          pro1: "玉锦酒店加固工程",
          pro2: "昆明大成学校增设钢楼梯加固工程",
          pro3: "翠湖南路私人商铺改造加固工程",
          pro4: "勐腊边防部队住宅",
          pro5: ""
        },
        {
          num: "6",
          pro1: "巧家县人民医院开孔加固",
          pro2: "个旧市福家营加油站加固工程",
          pro3: "溪鹿南郡电梯改造加固工程",
          pro4: "昆钢建材行车桩基础",
          pro5: ""
        },
        {
          num: "7",
          pro1: "昆明美特斯水疗加固工程",
          pro2: "和谐世纪商铺增设夹层改造加固工程",
          pro3: "中石化新增提升机加固工程",
          pro4: "沾溢花山军分区宿舍",
          pro5: ""
        },
        {
          num: "8",
          pro1: "昆明鼎易天城加固工程",
          pro2: "原武定县地方税务局办公楼地梁加固工程",
          pro3: "楚雄双柏县人民医院住院楼加固工程",
          pro4: "普洱军分区食堂、宿舍",
          pro5: ""
        },
        {
          num: "9",
          pro1: "昆明盘龙宾馆裙楼加层加固",
          pro2: "武定县三层砌体结构增加层高加固工程",
          pro3: "昆明环城第一小学加固工程",
          pro4: "云南省军区边防团家属公寓",
          pro5: ""
        },
        {
          num: "10",
          pro1: "昆明公安局便民服务中心加固工程",
          pro2: "祥云县清华洞油库改造加固工程",
          pro3: "大理龙龛客栈加固工程",
          pro4: "云南省军区金平边防五团家属公寓",
          pro5: ""
        },
        {
          num: "11",
          pro1: "昆明非常天地餐厅加固工程",
          pro2: "曲靖潇湘街道水务所剪力墙加固工程 ",
          pro3: "世博花园酒店小楼纠偏加固工程",
          pro4: "昆明福善寺基础工程",
          pro5: ""
        },
        {
          num: "12",
          pro1: "玉溪玉水金岸加固工程",
          pro2: "玉溪新平北京银行分行加固工程",
          pro3: "云溪小学教师宿舍加固工程",
          pro4: "云南印象售楼部",
          pro5: ""
        },
        {
          num: "13",
          pro1: "中石化档案室加固工程",
          pro2: "昭通彝良洛泽河镇国土资源服务中心加固工程",
          pro3: "安宁公安局A栋加固工程",
          pro4: "武定县狮子山牌坊",
          pro5: ""
        },
        {
          num: "14",
          pro1: "昆明版筑翠园10栋改造加固工程",
          pro2: "昭通农产品安全检测中心加固工程",
          pro3: "金沙古镇C1栋加固工程",
          pro4: "文山三七加工厂",
          pro5: ""
        },
        {
          num: "15",
          pro1: "明德中学火灾加固工程",
          pro2: "昆勘院冬青里4号小区配电室加固工程",
          pro3: "滇池明珠广场3号楼加固工程",
          pro4: "临沧凤庆红茶城",
          pro5: ""
        },
        {
          num: "16",
          pro1: "丘北县二中教学楼纠偏加固工程",
          pro2: "昭通私人小宗地块建设项目加固工程",
          pro3: "云投生态办公楼加固工程",
          pro4: "昆明难庵寺重建工程",
          pro5: ""
        },
        {
          num: "17",
          pro1: "盘龙寺挡土墙加固工程",
          pro2: "",
          pro3: "昆明XX部队梁开孔加固工程",
          pro4: "",
          pro5: ""
        },
        {
          num: "18",
          pro1: "昆明跑马山吊唁厅C段加固工程",
          pro2: "",
          pro3: "怒江江东财富中心商住综合楼加固工程",
          pro4: "",
          pro5: ""
        },
        {
          num: "19",
          pro1: "昆明妇幼保健院梁板加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "20",
          pro1: "森工集团11栋宿舍压力注浆加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "21",
          pro1: "文山XX部队机关办公楼加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "22",
          pro1: "昭通彝良奎香农村信用社加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "23",
          pro1: "昆明子弟食品有限公司厂房加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "24",
          pro1: "昆明化学工业有限公司晋宁分公司加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "25",
          pro1: "昆明兰缘餐厅加层加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "26",
          pro1: "昭通老农校加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "27",
          pro1: "昭通老党校加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "28",
          pro1: "昆明奥宸地下室加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "29",
          pro1: "景谷县勐班乡中心小学学生食堂加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "30",
          pro1: "西双版纳综治中心办公楼加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "31",
          pro1: "贵州茅台镇私人厂房加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "32",
          pro1: "昆明彩云水榭私人别墅改造加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "33",
          pro1: "盈江糖厂加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "34",
          pro1: "重机厂西区9号厂房加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "35",
          pro1: "洱源县炼铁乡私宅灾后加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "36",
          pro1: "怒江宏盛锦盟硅业有限公司厂房加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "37",
          pro1: "大商汇C区24栋103号商铺局部改造加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "39",
          pro1: "中国人民解放军XX部队1号地面库加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "40",
          pro1: "贵州普定县中义大厦加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "41",
          pro1: "腾冲市曲石镇回街完小教学综合楼加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "42",
          pro1: "昆明爱琴海小太阳游泳池改造加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "43",
          pro1: "云投生态办公楼附楼改造加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "44",
          pro1: "昆明市医保局档案室加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        },
        {
          num: "45",
          pro1: "昭通城乡规划局加固工程",
          pro2: "",
          pro3: "",
          pro4: "",
          pro5: ""
        }
      ]
    };
  }
};
</script>
