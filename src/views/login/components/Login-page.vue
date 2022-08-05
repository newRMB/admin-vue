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
        <LoginTel />
      </el-tab-pane>
    </el-tabs>
    <div class="extra">
      <div class="save-psd">
        <el-checkbox v-model="isSavePsd" label="记住密码" size="large" />
      </div>
      <div>
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>
    <el-button type="primary" class="login-btn">登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './Login-account.vue'
import LoginTel from './Login-tel.vue'
export default defineComponent({
  components: {
    LoginAccount,
    LoginTel
  },
  setup() {
    const isSavePsd = ref(false)
    return {
      isSavePsd
    }
  }
})
</script>

<style lang="less" scoped>
.login-page {
  width: 320px;
  height: 353px;
  .extra {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
