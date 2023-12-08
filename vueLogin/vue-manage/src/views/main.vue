<template>
  <div class="main">
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "../components/Menu";
export default {
  components: {
    Menu
  }
}
</script>
