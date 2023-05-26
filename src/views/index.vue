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
                        <template v-for="item in abyss.stack" :key="item.name">
                            <template v-if="!item.children && item.web">
                                <a-typography class="site">
                                    <a-typography-title
                                        class="title"
                                        :id="item.name"
                                        :level="3"
                                    >{{item.name}}</a-typography-title>
                                    <a-divider></a-divider>
                                    <a-row class="item-row">
                                        <a-col
                                            class="item-col"
                                            v-for="site in item.web"
                                            :key="site.title"
                                            :xs="24"
                                            :sm="24"
                                            :md="12"
                                            :lg="12"
                                            :xl="6"
                                        >
                                            <a-card
                                                hoverable
                                                @click="handleHerf(site.url)"
                                                size="small"
                                            >
                                                <a-card-meta :title="site.title">
                                                    <template #avatar>
                                                        <a-avatar :src="site.logo" />
                                                    </template>

                                                    <template #description>{{site.desc}}</template>
                                                </a-card-meta>
                                            </a-card>
                                        </a-col>
                                    </a-row>
                                </a-typography>
                            </template>

                            <template v-if="item.children">
                                <template v-for="sub_item in item.children" :key="sub_item.name">
                                    <a-typography class="site" v-if="sub_item.web">
                                        <a-typography-title
                                            class="title"
                                            :id="sub_item.name"
                                            :level="3"
                                        >{{sub_item.name}}</a-typography-title>
                                        <a-divider></a-divider>
                                        <a-row class="item-row">
                                            <a-col
                                                class="item-col"
                                                v-for="site in sub_item.web"
                                                :key="site.title"
                                                :xs="24"
                                                :sm="24"
                                                :md="12"
                                                :lg="12"
                                                :xl="6"
                                            >
                                                <a-card
                                                    hoverable
                                                    @click="handleHerf(site.url)"
                                                    size="small"
                                                >
                                                    <a-card-meta :title="site.title">
                                                        <template #avatar>
                                                            <a-avatar :src="site.logo" />
                                                        </template>
                                                        <template #description>{{site.desc}}</template>
                                                    </a-card-meta>
                                                </a-card>
                                            </a-col>
                                        </a-row>
                                    </a-typography>
                                </template>
                            </template>
                        </template>
                    </a-layout-content>
                </a-layout>
            </a-col>
        </a-row>
        <a-back-top />
    </a-layout>
</template>

<script setup >
import { ref, nextTick, inject } from 'vue'
import {
    UnorderedListOutlined,
    ReloadOutlined,
    GithubOutlined,
} from '@ant-design/icons-vue'

// 导入自定义组件
import VHeader from '@/components/header.vue'
import VAside from '@/components/aside.vue'

import tools from '@/utils/tools'

import { abyssPinia } from '@/pinia/abyss'
import { persistPinia } from '@/pinia/persist'

const abyss = abyssPinia()
const persist = persistPinia()

const reload = inject('reload')

nextTick(async () => {
    await abyss.get_stack_list()
    tools.handleScroll(persist.selected_name, persist.open_keys)
})

// go url
const handleHerf = (url) => {
    window.open(url, '_blank')
}

const handleTargetGithub = () => {
    window.open('https://github.com/diudiudiuu/abyss', '_blank')
}
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