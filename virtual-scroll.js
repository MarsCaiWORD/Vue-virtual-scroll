const virtualScroll = {
    name: 'virtualScroll',

    template: '#virtual-scroll',
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

new Vue({
    el: "#app",
    components: {
        virtualScroll
    },
    created() {
     
        //建立個假資料
        for (let i = 0; i < 30; i++) {
            this.list.push({ value: i });
        }
    },
    data: {
        list: []
    },
    methods: {

    }
})

