<template>
  <section class="py-16">
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto">
          <a href="#" class="logo hover">
            <img src="../assets/images/logo.svg" alt="Logo">
          </a>
        </div>
        <div class="col">
          <div class="row g-16">
            <div class="col">
              <el-input
                  v-model="search"
                  size="large"
                  placeholder="Поиск автомобиля"
                  :prefix-icon="Search"
              />
            </div>
            <div class="col-auto">
              <el-button type="primary" size="large" :icon="Operation" @click="visible = true">
                Фильтр
              </el-button>
              <el-drawer v-model="visible" :show-close="false" append-to-body>
                <template #header="{ close, titleId, titleClass }">
                  <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
                  <el-button type="danger" @click="close">
                    <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                    Close
                  </el-button>
                </template>
                This is drawer content.
              </el-drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  ElInput,
  ElButton,
  ElDrawer,
} from "element-plus";
import { ref } from 'vue'

//Search
const search = ref('')
import { Search } from '@element-plus/icons-vue'

//Drawer
import { Operation, CircleCloseFilled  } from '@element-plus/icons-vue'
const visible = ref(false)
</script>

<style scoped>
.el-input {
  --el-input-bg-color: var(--el-bg-color-light);
}
</style>
