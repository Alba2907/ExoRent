<script setup>
import { ID_INJECTION_KEY } from 'element-plus'
import Index from "./pages";

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
})

</script>

<template>
<index />
</template>
