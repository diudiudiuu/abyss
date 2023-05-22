<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline">
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />subnav 1
                        </span>
                    </template>
                    <a-menu-item key="1">option1</a-menu-item>
                    <a-menu-item key="2">option2</a-menu-item>
                    <a-menu-item key="3">option3</a-menu-item>
                    <a-menu-item key="4">option4</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <laptop-outlined />subnav 2
                        </span>
                    </template>
                    <a-menu-item key="5">option5</a-menu-item>
                    <a-menu-item key="6">option6</a-menu-item>
                    <a-menu-item key="7">option7</a-menu-item>
                    <a-menu-item key="8">option8</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                        <span>
                            <notification-outlined />subnav 3
                        </span>
                    </template>
                    <a-menu-item key="9">option9</a-menu-item>
                    <a-menu-item key="10">option10</a-menu-item>
                    <a-menu-item key="11">option11</a-menu-item>
                    <a-menu-item key="12">option12</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header theme="light">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content>
                <a-row :gutter="16">
                    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        <a-card hoverable>
                            <a-card-meta title="Card title" description="This is the description">
                                <template #avatar>
                                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        <a-card hoverable>
                            <a-card-meta title="Card title" description="This is the description">
                                <template #avatar>
                                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        <a-card hoverable>
                            <a-card-meta title="Card title" description="This is the description">
                                <template #avatar>
                                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        <a-card hoverable>
                            <a-card-meta title="Card title" description="This is the description">
                                <template #avatar>
                                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
                        <a-card hoverable>
                            <a-card-meta title="Card title" description="This is the description">
                                <template #avatar>
                                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                </a-row>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup >
import { ref, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue'
// import { useI18n } from 'vue-i18n'

import { useConstantStore } from '@/pinia/constant'
import { useVariableStore } from '@/pinia/variable'
import { useStorageStore } from '@/pinia/storage'

const constant = useConstantStore()
const variable = useVariableStore()
const storage = useStorageStore()

const router = useRouter()
const setMetaTitle = inject('setMetaTitle')
const reload = inject('reload')

// const { t } = useI18n()

// 设置 title
// setMetaTitle(t('book.list.title'))

const selectedKeys1 = ref(['2'])
const selectedKeys2 = ref(['1'])
const collapsed = ref(false)
const openKeys = ref(['sub1'])
</script>
<style lang="less" scoped>
</style>