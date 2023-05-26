<template>
    <a-layout>
        <a-layout-sider class="sider" :width="200">
            <a class="logo" href="javascript::void(0)">
                <a-avatar :src="logo" :size="50" />
                <span class="project-name">Abyss Diuu</span>
            </a>
            <a-menu mode="inline">
                <template v-for="item in abyss.stack" :key="item.name">
                    <a-menu-item
                        v-if="!item.children"
                        :key="item.name"
                        selectedKeys="persist.selected_name"
                        openKeys="persist.open_keys"
                        @click="handleMenu(item.name, item.name)"
                    >{{item.name}}</a-menu-item>

                    <a-sub-menu v-if="item.children" :key="item.name">
                        <template #title>{{item.name}}</template>
                        <a-menu-item
                            v-for="sub_item in item.children"
                            :key="sub_item.name"
                            @click="handleMenu(sub_item.name, item.name)"
                        >{{sub_item.name}}</a-menu-item>
                    </a-sub-menu>
                </template>
            </a-menu>
        </a-layout-sider>
    </a-layout>
</template>
<script setup>
import { ref, inject } from 'vue'
import logo from '@/assets/logo.png'

import { abyssPinia } from '@/pinia/abyss'
import { persistPinia } from '@/pinia/persist'

import tools from '@/utils/tools'

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')

// click menu
const handleMenu = (name, pname) => {
    persist.selected_name = [name]
    persist.open_keys = [pname]

    persist.show_menu = false

    // 跳转到指定name的锚点
    tools.handleScroll(persist.selected_name)
}
</script>

<style lang="less" scoped>
.sider {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    left: 0;
    top: 0;
    bottom: 0;
    .logo {
        line-height: 64px;
        text-align: center;

        padding-left: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .project-name {
            margin-left: 10px;
            color: #000000d9;
            font-size: 20px;
        }
    }
}
</style>