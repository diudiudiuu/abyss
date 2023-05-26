<template>
    <a-layout>
        <a-layout-header class="header">
            <a-row type="flex" justify="space-between">
                <!-- 菜单按钮 -->
                <a-col flex="100px">
                    <unordered-list-outlined class="icon" @click="handleShowMenu" />
                </a-col>
                <!-- 操作 -->
                <a-col flex="1" class="header-menu">
                    <reload-outlined class="icon" @click="handleReload" :spin="spin" />
                    <github-outlined class="icon" @click="handleTargetGithub" />
                </a-col>
            </a-row>
        </a-layout-header>
    </a-layout>
</template>
<script setup>
import { ref, inject } from 'vue'
import {
    UnorderedListOutlined,
    ReloadOutlined,
    GithubOutlined,
} from '@ant-design/icons-vue'

import { abyssPinia } from '@/pinia/abyss'
import { persistPinia } from '@/pinia/persist'

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')

const handleShowMenu = () => {
    show_menu.value = !show_menu.value
}

const spin = ref(false)
const handleReload = () => {
    spin.value = true
    setTimeout(() => {
        spin.value = false
        reload()
    }, 1000)
}

const handleTargetGithub = () => {
    window.open('https://github.com/diudiudiuu/abyss', '_blank')
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    z-index: 1;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 0 20px;
    .icon {
        font-size: 22px;
    }
    .header-menu {
        text-align: right;
        .icon {
            margin-right: 15px;
            font-size: 18px;
        }
    }
}
</style>