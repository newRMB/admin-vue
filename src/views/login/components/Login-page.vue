<template>
  <div class="login-page">
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>账号密码登录</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机号登录</span>
          </span>
        </template>
        手机
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginAccount from './Login-account.vue'
export default defineComponent({
  components: {
    LoginAccount
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login-page {
  width: 320px;
  height: 353px;
}
</style>
