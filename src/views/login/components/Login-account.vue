<template>
  <div>
    <el-form :rules="rules" :model="ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormRules } from 'element-plus'
export default defineComponent({
  components: {},
  setup() {
    //表单校验规则
    const rules = ref<FormRules>({
      account: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' }
      ]
    })
    const ruleForm = ref({
      account: '',
      password: ''
    })
    return {
      rules,
      ruleForm
    }
  }
})
</script>

<style lang="less" scoped></style>
