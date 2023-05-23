<template>
    <a-layout class="abyss">
        <a-layout-sider :width="220" class="sider">
            <div class="logo" />
            <a-menu v-model:selectedKeys="selected_name" v-model:openKeys="openKeys" mode="inline">
                <template v-for="item in abyss.stack" :key="item.name">
                    <a-menu-item
                        v-if="!item.children"
                        :key="item.name"
                        @click="hanldMenu(item.name)"
                    >{{item.name}}</a-menu-item>

                    <a-sub-menu v-if="item.children" :key="item.name">
                        <template #title>{{item.name}}</template>
                        <a-menu-item
                            v-for="sub_item in item.children"
                            :key="sub_item.name"
                            @click="hanldMenu(sub_item.name)"
                        >{{sub_item.name}}</a-menu-item>
                    </a-sub-menu>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout class="contain">
            <a-layout-header class="header"></a-layout-header>
            <a-layout-content class="content">
                <template v-for="item in abyss.stack" :key="item.name">
                    <template v-if="!item.children && item.web">
                        <a-typography class="site">
                            <a-typography-title
                                class="title"
                                :id="item.name"
                                :level="3"
                            >{{item.name}}</a-typography-title>
                            <a-row>
                                <a-col
                                    v-for="site in item.web"
                                    :key="site.title"
                                    :xs="24"
                                    :sm="24"
                                    :md="24"
                                    :lg="6"
                                    :xl="4"
                                >
                                    <a-card hoverable>
                                        <a-card-meta :title="site.title" :description="site.desc">
                                            <template #avatar>
                                                <a-avatar :src="site.logo" />
                                            </template>
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
                                <a-row>
                                    <a-col
                                        v-for="site in sub_item.web"
                                        :key="site.title"
                                        :xs="24"
                                        :sm="24"
                                        :md="24"
                                        :lg="6"
                                        :xl="4"
                                    >
                                        <a-card hoverable>
                                            <a-card-meta
                                                :title="site.title"
                                                :description="site.desc"
                                            >
                                                <template #avatar>
                                                    <a-avatar :src="site.logo" />
                                                </template>
                                            </a-card-meta>
                                        </a-card>
                                    </a-col>
                                </a-row>
                            </a-typography>
                        </template>
                    </template>
                </template>
            </a-layout-content>

            <div id="home">这里</div>
        </a-layout>
    </a-layout>
</template>

<script setup >
import { ref } from 'vue'

import { useAbyssStore } from '@/pinia/abyss'

const abyss = useAbyssStore()

const selected_name = ref([abyss.selected_name])
const openKeys = ref([abyss.selected_name])

const hanldMenu = (name) => {
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
<style lang="less" scoped>
.abyss {
    .sider {
        overflow: auto;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .contain {
        margin-left: 220px;
        .header {
            position: fixed;
            z-index: 1;
            width: 100%;
        }

        .content {
            margin-top: 64px;
            .site {
                .title {
                    scroll-margin: 64px;
                }
            }
        }
    }
}
</style>