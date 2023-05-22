import { defineStore } from 'pinia'

/**
 * 变量存储
 * 注意部分数据初始值需要与常量保持一致
 */

export const useVariableStore = defineStore({
  id: 'variable',
  state: () => ({
    scrollbar: null, // 滚动条

  }),
  getters: {
  },
  actions: {
  },
})