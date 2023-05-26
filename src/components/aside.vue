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

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')

// click menu
const handleMenu = (name, pname) => {
    // persist.selected_name = name
    // persist.open_keys = pname

    // selected_name.value = [name]
    // open_keys.value = [pname]

    // 跳转到指定name的锚点
    const el = document.getElementById(name)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
        })
    }
}
</script>

<style lang="less" scoped></style>