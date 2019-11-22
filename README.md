# npm
`npm i vue-virtual-scrolling`


# Vue-virtual-scroll
Vue virtual-scroll Vue virtual-scroll Split components can be used 

# Demo
https://jsfiddle.net/gary75952/2m8epjsb/28/


# Props
`data`:(required) List Data

`minHeight`:(required) Each Data show min-Height

`minCount`:(required) render Count


# HOW TO WORK

```
import virtualScroll from "vue-virtual-scrolling";
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
 </virtual-scroll>

