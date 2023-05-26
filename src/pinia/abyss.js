import { defineStore } from 'pinia'

import api from '@/api'
/**
 * 网站数据
 * 
 */
export const abyssPinia = defineStore({
    id: 'abyss',
    state: () => ({
        stack: [],
        show_menu: false, // 展示菜单
        spining: false, // 展示搜索
    }),
    getters: {
    },
    actions: {
        async get_stack_list() {
            await api.stack.list().then(res => {
                // 赋值给 stack
                this.stack = res.data
            }).catch(() => {

            })
        },
    },
})