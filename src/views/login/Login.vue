<template>
  <div class="login">
    <LoginPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPage from './components/Login-page.vue'
export default defineComponent({
  components: { LoginPage },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
