# npm
`npm i vue-virtual-scrolling`


# Vue-virtual-scroll
Vue virtual-scroll(虛擬卷軸功能實現) 拆分components可以做為套件使用

# Demo
https://jsfiddle.net/gary75952/2m8epjsb/22/


# Props
`data`:(必要) 要顯示的list資料

`minHeight`:(必要) 每筆資料的最小高度

`minCount`:(必要)要顯示渲染的數量


# HOW TO WORK

```
import virtualScroll from "virtualScroll.vue";
components: {
virtualScroll
}

.Vue
<virtual-scroll :data="list" :min-height="30" :min-count="5" style="height: 300px">
            <template v-slot:default="slotProps">
                <div v-for="(item,index) in slotProps.data">
                    {{item.value}}
                </div>
            </template>
 </virtual-scroll>```

