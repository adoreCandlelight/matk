<template>
    <div>
        <div class="footArea">
             <p class="footer">MATK &copy; {{curYear}} The Ren Lab. All Rights Reserved</p>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            curYear: 2020
        }
    },
    methods: {
        SetCurYear() {
            let date = new Date();
            this.curYear = date.getFullYear();
        }
    },
    mounted() {
        this.SetCurYear();
    }
}
</script>

<style lang="scss" scoped>
.footArea {
    background-color:#a9a9a9;
}
.footer {
    text-align: center;
    color:#f0f0ff;
    font-size: 18px;
    padding: 6px 0;
}
</style>
