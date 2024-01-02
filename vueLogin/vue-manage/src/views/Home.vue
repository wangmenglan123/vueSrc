<template>
  <div class="home">
    <el-row>
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="info">
            <img src="@/assets/info.jpg" alt="">
            <div class="info_right">
              <p class="name"> admin</p>
              <p>超级管理员</p>
            </div>
          </div>
          <div class="login">
            <p><span>上次登录时间</span><span class="login_right">2023-12-11</span></p>
            <p><span>上次登录地点</span><span class="login_right">北京</span></p>
          </div>
          
        </el-card>
        <el-card shadow="hover" style="margin-top: 20px">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column v-for="(value,key,index) in tableLabels"
              :key="index"
              :prop="key"
              :label="value"
              width="100">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="label">
          <el-card class="label_item" shadow="hover" :body-style="{display: 'flex','align-items':'center'}" v-for="(item,index) in labelData" :key="index">
            <div class="label_icon">
              <i :class="`el-icon${item.icon}`"></i>
            </div>
            <div class="label_info">
              <p>{{item.name}}</p>
              <p>{{item.count}}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import getData from '../api/index.js'
export default {
  name: "Home",
  data() {
    return {
      tableLabels: {
        'date': '日期',
        'name': '姓名',
        'address': '地址',
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      labelData: [
        {
          'icon':'-circle-check',
          'name': '今日支付订单',
          'count':'1234',
        },
        {
          'icon':'-goods',
          'name': '今日收藏订单',
          'count':'1234',
        },
        {
          'icon':'-star-on',
          'name': '今日未支付订单',
          'count':'1234',
        },

      ]
    }
  },
  mounted() {
    getData().then(
      ()=>{
        console.log('111')
      }
    ).catch(err=> console.log('err',err))
  }
};
</script>
<style lang="less" scoped>
.home {
  .info {
    display: flex;
    align-items: center;
    padding-bottom:20px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(141, 137, 137);
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .info_right {
      margin-left: 10px;
      .name {
        margin-bottom: 10px;
      }
    }
  }
  .login {
    text-align: left;
     .login_right {
      margin-left: 20px;
    }

  }
  .label {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 10px;
    .el-card {
      width: 32%;
    }

    .label_icon {
      width: 50px;
      height: 50px;
      background-color: pink;
      line-height: 50px;
      text-align: center;
    }

    .label_info {
      margin-left: 10px;
    }
  }
}
</style>
