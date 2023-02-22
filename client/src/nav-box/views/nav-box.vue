<template>
  <div class="nav-box">
    <el-row type='flex'>
      <el-col :span="3">
          <slot name="icon"></slot>
      </el-col>
      <el-col :span="18" class="input-box">
          <slot name="input"></slot>
      </el-col>
      <el-col :span="3">
           <slot name="login"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.nav-box{
    height: 100% !important;
}
.el-row{
    height: 100% !important;
}
.el-col{
    display: flex;
    justify-content: center;
    align-self: center;
}
</style>