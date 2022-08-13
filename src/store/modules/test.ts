import { defineStore } from 'pinia';
import { store } from '@/store';

export type TestState = {
  count: number;
};

export const useTestStore = defineStore({
  id: 'test',
  state: (): TestState => ({
    count: 0,
  }),
  actions: {
    setCount(value: number) {
      this.count += value;
    },
  },
});
// 在组件setup函数外使用
export function useTestStoreWithOut() {
  return useTestStore(store);
}
