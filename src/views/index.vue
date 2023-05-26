<template>
    <div class="site-list">
        <template v-for="item in abyss.stack" :key="item.name">
            <template v-if="!item.children && item.web">
                <a-typography class="site">
                    <a-typography-title class="title" :id="item.name" :level="3">{{item.name}}</a-typography-title>
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
                            <a-card hoverable @click="handleHerf(site.url)" size="small">
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
                                <a-card hoverable @click="handleHerf(site.url)" size="small">
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
    </div>
</template>

<script setup >
import { ref, nextTick, inject } from 'vue'

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
</script>
<style lang="less" scoped>
</style>