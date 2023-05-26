import net from '@/utils/net'


const stack = {
    list(param) {
        return net({
            url: 'stack.json',
            method: 'get',
            data: param
        })
    },
}


export default stack