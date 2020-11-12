import { debouce } from "./utils"

// vue高阶编程技术混入 mixins
export const itemListenerMixin = {
    date() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let newRefresh = debouce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            newRefresh()
        }
        this.$bus.$on('itemImaLoad', this.itemImgListener)
    }
}