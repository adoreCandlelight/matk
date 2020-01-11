<template>
    <div>
        <transition name="fade">
            <div v-show="show" id="backToTop" @click="scroll_to(0)" title="Back to top">
                <i class="el-icon-caret-top"></i>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        showScroll() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if (scrollTop > 100) {
                this.show = true
            } else {
                this.show = false
            }
        },
        scroll_to(targetY) {
            var mytimer = setTimeout(() => {
                // 兼容不同浏览器
                var currentY = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset 
                const step = 40 //步长系数 即剩余的距离除以40 每1ms 移动一段距离
                // console.log(currentY)
                let distTotal = currentY - targetY
                let dist = Math.ceil(distTotal / step)
                var nextY = currentY - dist
                window.scrollTo(0, nextY)
                // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
                if (distTotal < 10) {
                    window.scrollTo(0, targetY)
                } else {
                    this.scroll_to(targetY)    
                }
            }, 1);
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showScroll)
    }
}
</script>

<style lang="scss" scoped>
#backToTop {
    position: fixed;
    bottom: 80px;
    right: 50px;
    z-index: 999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 20px;
    background-color:slategrey;
    color: #000000;
    align-items: center;
    text-align: center;
    // vertical-align: bottom;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    cursor: pointer;
    // opacity: 0;
}
</style>