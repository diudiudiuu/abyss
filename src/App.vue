<template>
    <router-view v-if="showRouter"></router-view>
</template>

<script setup>
import { ref, nextTick, provide, onMounted } from 'vue'
import { useStorageStore } from '@/pinia/storage'

const storage = useStorageStore()
onMounted(() => {
    document.title = 'Abyss Diuu'
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

<style lang="less">
html {
    -moz-user-select: none; /* Firefox私有属性 */
    -webkit-user-select: none; /* WebKit内核私有属性 */
    -ms-user-select: none; /* IE私有属性(IE10及以后) */
    -khtml-user-select: none; /* Khtml内核私有属性 */
    -o-user-select: none; /* Opera私有属性 */
    user-select: none; /* CSS3属性 */
}
/* 添加圆角边框 */
::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
}

/* 添加阴影效果 */
::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* 修改滚动条轨道背景颜色 */
::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
</style>
