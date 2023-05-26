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
                    <reload-outlined class="icon" @click="handleReload" :spin="abyss.spining" />
                    <github-outlined class="icon" @click="handleTargetGithub" />
                </a-col>
            </a-row>
        </a-layout-header>

        <a-drawer
            title="Abyss Diuu"
            placement="left"
            :closable="true"
            :visible="persist.show_menu"
            width="200px"
            class="drawer"
            @close="handleShowMenu"
        >
            <v-aside></v-aside>
        </a-drawer>
    </a-layout>
</template>
<script setup name="header">
import { ref, inject } from 'vue'
import {
    UnorderedListOutlined,
    ReloadOutlined,
    GithubOutlined,
} from '@ant-design/icons-vue'

// 导入自定义组件
import VAside from '@/components/aside.vue'

import { abyssPinia } from '@/pinia/abyss'
import { persistPinia } from '@/pinia/persist'

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')

const handleShowMenu = () => {
    persist.show_menu = !persist.show_menu
}

const handleReload = () => {
    // abyss.spining = true
    reload()
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