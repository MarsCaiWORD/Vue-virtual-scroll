<template>
    <div class="list-view"
         @scroll="handleScroll">
        <!-- 撐虛擬高 -->
        <div :style="{
         height: virtualHeight + 'px'
      }" class="list-view-phantom"></div>

        <!-- 內容物 -->
        <div class="list-view-content">
            <slot :data="virtuallist"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'virtualScroll',
        props: {
            data: {
                type: Array,
                required: true
            },
            minHeight: {
                type: Number,
                required: true
            },
            minCount: {
                type: Number,
                required: true
            },
        },
        data() {
            return {
                virtuallist: this.data,
                virtualHeight: this.data.length * this.minHeight,
            }
        },
        computed: {


        },
        created() {

            this.virtuallist = this.data.slice(0, this.minCount);
        },
        mounted() {
            //綁上設定的高
            for (let i = 0; i < this.$el.lastChild.children.length; i++) {
                this.$el.lastChild.children[i].style.height = this.minHeight + "px";
            }
        },
        methods: {
            handleScroll() {
                const scrollTop = this.$el.scrollTop;
                let start = Math.ceil(scrollTop / this.minHeight);
                let end = Math.ceil(((this.minHeight * this.minCount) + scrollTop) / this.minHeight);
                this.virtuallist = this.data.slice(start, end);
                this.$el.lastChild.style.webkitTransform = `translate3d(0, ${scrollTop}px, 0)`;
            },
        }
    }
</script>
<style>
    .list-view {
        min-height: 160px;
        overflow: auto;
        position: relative;
    }

    .list-view-phantom {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }

    .list-view-content {
        left: 0;
        right: 0;
        top: 0;
        position: absolute;
    }
</style>