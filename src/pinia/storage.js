import { defineStore } from 'pinia'

/**
 * 变量 需要临时储存
 * 与本地sessionstorage储存交互页面, 数据量禁止过大
 * 注意部分数据初始值需要与db常量保持一致
 */

export const useStorageStore = defineStore({
  id: 'storage',
  state: () => ({

  }),
  getters: {
  },
  actions: {
  },
})