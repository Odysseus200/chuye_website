<template>
  <div id="smartTown"> <h2>加固设计案例</h2> <el-table :data="tableData" style="font-size: 19px;" stripe size="medium"> <el-table-column prop="num" label="序号" align="center" width="70px"> </el-table-column> <el-table-column prop="pro1" label="项目地点" align="center" show-overflow-tooltip > </el-table-column> </el-table> </div>
</template>
<script>
export default {
  name: "smartTown",
  data() {
    return {tableData: [{num: "1", pro1: "昆明霖岚国际广场改造加固工程"},{num: "2", pro1: "弥勒湖泉金秋旅游小镇加固工程"},{num: "3", pro1: "昆明霖岚国际广场改造加固工程"},{num: "4", pro1: "楚雄调度用电综合楼加固工程"},{num: "5", pro1: "玉锦酒店加固工程"},{num: "6", pro1: "巧家县人民医院开孔加固"},{num: "7", pro1: "昆明美特斯水疗加固工程"},{num: "8", pro1: "昆明鼎易天城加固工程"},{num: "9", pro1: "昆明盘龙宾馆裙楼加层加固"},{num: "10", pro1: "昆明公安局便民服务中心加固工程"},{num: "11", pro1: "昆明非常天地餐厅加固工程"},{num: "12", pro1: "玉溪玉水金岸加固工程"},{num: "13", pro1: "中石化档案室加固工程"},{num: "14", pro1: "昆明版筑翠园10栋改造加固工程"},{num: "15", pro1: "明德中学火灾加固工程"},{num: "16", pro1: "丘北县二中教学楼纠偏加固工程"},{num: "17", pro1: "盘龙寺挡土墙加固工程"},{num: "18", pro1: "昆明跑马山吊唁厅C段加固工程"},{num: "19", pro1: "昆明妇幼保健院梁板加固工程"},{num: "20", pro1: "森工集团11栋宿舍压力注浆加固工程"},{num: "21", pro1: "文山XX部队机关办公楼加固工程"},{num: "22", pro1: "昭通彝良奎香农村信用社加固工程"},{num: "23", pro1: "昆明子弟食品有限公司厂房加固工程"},{num: "24", pro1: "昆明化学工业有限公司晋宁分公司加固工程"},{num: "25", pro1: "昆明兰缘餐厅加层加固工程"},{num: "26", pro1: "昭通老农校加固工程"},{num: "27", pro1: "昭通老党校加固工程"},{num: "28", pro1: "昆明奥宸地下室加固工程"},{num: "29", pro1: "景谷县勐班乡中心小学学生食堂加固工程"},{num: "30", pro1: "西双版纳综治中心办公楼加固工程"},{num: "31", pro1: "贵州茅台镇私人厂房加固工程"},{num: "32", pro1: "昆明彩云水榭私人别墅改造加固工程"},{num: "33", pro1: "盈江糖厂加固工程"},{num: "34", pro1: "重机厂西区9号厂房加固工程"},{num: "35", pro1: "洱源县炼铁乡私宅灾后加固工程"},{num: "36", pro1: "怒江宏盛锦盟硅业有限公司厂房加固工程"},{num: "37", pro1: "大商汇C区24栋103号商铺局部改造加固工程"},{num: "39", pro1: "中国人民解放军XX部队1号地面库加固工程"},{num: "40", pro1: "贵州普定县中义大厦加固工程"},{num: "41", pro1: "腾冲市曲石镇回街完小教学综合楼加固工程"},{num: "42", pro1: "昆明爱琴海小太阳游泳池改造加固工程"},{num: "43", pro1: "云投生态办公楼附楼改造加固工程"},{num: "44", pro1: "昆明市医保局档案室加固工程"},{num: "45", pro1: "昭通城乡规划局加固工程"}]};
  }
};
</script>
<style scoped>
#smartTown > h2{text-align: center; margin-bottom: 50px;}::v-deep .el-table_5_column_10{width: 10px;}
</style>
