<template>
    <router-view v-if="showRouter"></router-view>
</template>

<script setup>
import { ref, nextTick, provide, onMounted } from 'vue'
import { useStorageStore } from '@/pinia/storage'

const storage = useStorageStore()
onMounted(() => {
    document.title = 'Abyss'
})
const setMetaTitle = (title) => {
    document.title = title
}
provide('setMetaTitle', setMetaTitle)

if (sessionStorage.getItem('temporary')) {
    storage.$state = JSON.parse(sessionStorage.getItem('temporary'))
    //删除
    sessionStorage.removeItem('temporary')
}
window.addEventListener('pagehide', () => {
    sessionStorage.setItem('temporary', JSON.stringify(storage.$state))
})

// 刷新页面
const showRouter = ref(true)
const reload = () => {
    showRouter.value = false
    nextTick(() => {
        showRouter.value = true
    })
}
provide('reload', reload)
</script>
