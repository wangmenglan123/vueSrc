<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <p class="totTit"> {{totTitle}}</p>
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="toPath(item.path)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name" >
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name" @click="toPath(child.path)">{{child.title}}</el-menu-item>
        </el-submenu>
    </el-menu>

</template>
<script>
  export default {
    data() {
      return {
        menuData: [
           {
            title:'首页',
            name: 'main',
            icon: 's-home',
            path: '/'
          },
          {
            title:'商品管理',
            name: 'goods',
            icon: 'shopping-bag-2',
            path: '/home'
          },
          {
            title:'用户管理',
            name: 'user',
            icon: 'user',
            path: '/user'
          },
          {
            title:'其他事项',
            name: 'other',
            icon: 'location-information',
            children: [
              {
                title:'选项一',
                name: 'choose1',
                path:'/tab1',
              },
            ]
          },

        ]
      };
    },
    computed: {
      isCollapse() {
        return this.$store.state.menu.collapse
      },
      noChildren() {
        return this.menuData.filter((item)=>{
          return !item.children
        })
      },
      hasChildren(){
        return this.menuData.filter((item)=>{
          return item.children
        })
      },
      totTitle() {
        if(this.isCollapse) {
          return '后台'
        } else {
          return "通用后台管理系统"
        }
      }
    },
    methods: {
      toPath(path) {
        if(this.$route.path != path  )
        this.$router.push(path)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style  scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
  }
  .el-menu--collapse {
    min-height: 100vh;
  }
  .totTit {
    color: #fff;
  }
</style>