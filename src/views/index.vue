<template>
    <a-layout class="abyss">
        <a-row type="flex" justify="space-around">
            <a-col flex="200px">
                <a-layout-sider class="sider" :width="200">
                    <div class="logo"></div>
                    <a-menu
                        v-model:selectedKeys="selected_name"
                        v-model:openKeys="open_keys"
                        mode="inline"
                    >
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
            </a-col>
            <a-col flex="1">
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
                                            <a-card hoverable @click="handleHerf(site.url)">
                                                <a-card-meta
                                                    :title="site.title"
                                                    :description="site.desc"
                                                >
                                                    <template #avatar>
                                                        <a-avatar :src="getLogoUrl(site.logo)" />
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
                                                <a-card hoverable @click="handleHerf(site.url)">
                                                    <a-card-meta
                                                        :title="site.title"
                                                        :description="site.desc"
                                                    >
                                                        <template #avatar>
                                                            <a-avatar :src="getLogoUrl(site.logo)" />
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
                </a-layout>
            </a-col>
        </a-row>
        <a-back-top />
    </a-layout>
</template>

<script setup >
import { ref, onMounted, nextTick } from 'vue'

import { useAbyssStore } from '@/pinia/abyss'
import { useStorageStore } from '@/pinia/storage'

const abyss = useAbyssStore()
const storage = useStorageStore()

const selected_name = ref([])
const open_keys = ref([])

// click menu
const handleMenu = (name, pname) => {
    storage.selected_name = name
    storage.open_keys = pname

    selected_name.value = [name]
    open_keys.value = [pname]

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
onMounted(async () => {
    await nextTick()
    handleMenu(storage.selected_name, storage.open_keys)
})

// get logo url
const getLogoUrl = (logo) => {
    const url = new URL(`../${logo}`, import.meta.url)
    // 转为string
    return url.toString()
}

// go url
const handleHerf = (url) => {
    window.open(url, '_blank')
}
</script>
<style lang="less" scoped>
.abyss {
    .sider {
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        background-color: #fff;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .contain {
        .header {
            position: fixed;
            z-index: 1;
            width: 100%;
            background-color: #fff;
        }

        .content {
            margin-top: 64px;
            padding: 10px;
            .site {
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