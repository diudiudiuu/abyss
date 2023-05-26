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
        }
    },
})