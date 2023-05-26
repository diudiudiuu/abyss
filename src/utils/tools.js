// 滑动到指定位置
const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
        })
    }
}

const tools = {
    handleScroll,
}

export default tools 