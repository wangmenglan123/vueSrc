<template>
  <div class="main">
    <el-container>
      <el-aside width="auto">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <Head></Head>
        </el-header>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "../components/Menu";
import Head from "../components/Head";
export default {
  components: {
    Menu,
    Head
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    changeMenuSta() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
.el-menu {
  border-right: 0;
}
</style>
