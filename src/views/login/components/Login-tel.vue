<template>
  <div>
    <!-- <el-from :rules="rules" :model="ruleForm">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="ruleForm.tel" />
      </el-form-item>
    </el-from> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormRules } from 'element-plus'
export default defineComponent({
  components: {},
  setup() {
    const rules = ref<FormRules>({
      tel: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        { min: 11, max: 11, message: '手机号是十一位的铁汁', trigger: 'blur' }
      ],
      code: [
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        },
        { min: 6, max: 6, message: '六位验证码', trigger: 'blur' }
      ]
    })
    const ruleForm = ref({
      tel: '',
      code: ''
    })
    return {
      rules,
      ruleForm
    }
  }
})
</script>

<style lang="less" scoped></style>
