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

        <div class="spining" v-if="abyss.spining">
            <a-spin></a-spin>
        </div>

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
        }
    }

    .spining {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 1000000000;
        text-align: center;
        // 上下居中
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: rgba(0, 0, 0, 0.15);
    }
}
</style>