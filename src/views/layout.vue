<template>
    <a-layout class="abyss">
        <a-row type="flex" justify="space-around">
            <a-col flex="200px" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
                <v-aside></v-aside>
            </a-col>
            <a-col flex="1">
                <a-layout class="contain">
                    <v-header></v-header>
                    <a-layout-content class="content">
                        <router-view></router-view>
                    </a-layout-content>
                </a-layout>
            </a-col>
        </a-row>
        <a-back-top />
    </a-layout>
</template>

<script setup >
import { ref, nextTick, inject } from 'vue'

// 导入自定义组件
import VHeader from '@/components/header.vue'
import VAside from '@/components/aside.vue'

import tools from '@/utils/tools'

import { abyssPinia } from '@/pinia/abyss'
import { persistPinia } from '@/pinia/persist'

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')
</script>
<style lang="less" scoped>
.abyss {
    .contain {
        width: 100%;

        .content {
            margin-top: 64px;
            padding: 10px;
            .site {
                padding-bottom: 30px;
                .title {
                    scroll-margin: 64px;
                }
                .item-row {
                    padding: 10px;
                    .item-col {
                        padding: 5px;
                    }
                }
            }
        }
    }
}
</style>