<template>
  <div>{{ msg }}</div>
  <div>{{ count }}111</div>
  <el-button type="primary" @click="toggleDark()">open</el-button>
  <button @click="setCount(1)">add</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { storeToRefs } from 'pinia';
  import { ElMessage } from 'element-plus';
  import { useDark, useToggle } from '@vueuse/core';
  import { useTestStore } from '@/store/modules/test';

  export default defineComponent({
    props: {
      msg: String,
    },

    setup() {
      const testStore = useTestStore();
      const { count } = storeToRefs(testStore);
      const isDark = useDark();
      const toggleDark = useToggle(isDark);
      const open = () => {
        ElMessage({
          type: 'success',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
          ]),
        });
      };

      return {
        toggleDark,
        setCount: testStore.setCount,
        count,
        open,
      };
    },
  });
</script>

<style scoped></style>
