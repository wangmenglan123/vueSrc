<template>
  <div class="header">
    <div class="left">
      <el-button  icon="el-icon-menu" size="mini" @click="menuColl"></el-button>
      <span>首页</span>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <img src="@/assets/info.jpg" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    menuColl() {
      this.$store.commit('setCollapse')
    }
  }
}
</script>
<style  lang="less" scoped>
.header {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 40px;
  font-size: 16px;
  background: #333;
  color:#ffffff;
  .left {
    span {
      margin-left: 8px;
    }
  }
  .right {
    
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    .demonstration {
      display: block;
      color: #8492a6;
      font-size: 14px;
      margin-bottom: 20px;
    }

  }

}
</style>