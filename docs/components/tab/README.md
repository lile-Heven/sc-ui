### tab

##### 注入组件

```js
const scui = require('path/to/dist/sc-ui');
```

```json
"usingComponents":{
  "sc-dialog":"path/to/dist/components/scDialog/sc-dialog"
}
```

##### 使用

sc-tab必须包含在sc-tab-group里

#### 1. sc-tab-group
```html
<sc-tab-group tab-list="{{tabList}}" bind:change="tabChange" active-class="active" driver-color="red" style="min-height: 180px" transition>
                <sc-tab class="text-body2">
                    <text>凌晨两点多入睡，五点左右，天色未亮，被猫咪惊醒。它也许刚睡醒，蹿到枕头边贴近我的身体，发出呼噜呼噜的声音，
                        流连之后跳下床去，在客厅里玩耍，发出追逐小球和兔皮老鼠的声音。</text>
                    <text>有一天早上起身，看到床的一侧放着鼠杆玩具，想来它半夜玩得兴起，把玩具叼到了床上</text>
                    <text>它身上规则的黑白条纹来自生命的秩序。玻璃球般的绿色眼珠，在黑暗中熠熠闪光。风从窗外吹进来，拂动窗帘，
                        它耸起鼻子捕捉季节的味道。睡觉时，蒙住自己的脸，蜷缩起柔软的爪子，温软的小小蹄肉呈现粉红色。小嘴巴总是有一股鱼腥味。</text>
                </sc-tab>
                <sc-tab class="text-body2">
                    有时它独自静悄悄趴在窗边发呆，有时玩抓耗子游戏。有时它对人厌倦，故意躲起来不见。我在空荡荡的屋子里寻找它，叫唤它的名字。在某个角落发现它，
                    它趴伏在黑暗中，听而不闻。此刻它显得这样骄傲。有时它有深深的眷恋和依赖，我走到哪里，它跟到哪里。有时它在沙发上紧张地舔毛，这样急迫，仿佛
                    这是折磨它的事情。它把身上脱落的碎毛舔进肚子里，在不被发觉的深夜呕吐，吐出大颗坚硬的毛球。
                </sc-tab>
                <sc-tab class="text-body2">
                    它清洁自己。睡觉。对着窗外凝望。独自玩耍。喜欢厨房，卫生间，柔软的睡床，窗台，以及任何隐蔽的可以使自己不被发现的角落。对一切声响气息和事物
                    有敏感及好奇。它凝望电脑屏幕，凝望电视，或者长时间凝望窗外的风景。这个世界它是否有参与感及试图对此保持理解，不得而知。我不知道它是否有抑郁
                    的倾向。每次看见我独自在房间里哭，它会露出吃惊的表情，悄悄蹲在床边，一动不动地仰头看着我。这一定是它无法辨识的方式。它轻声叫唤，空气中充溢
                    着轻柔声音所散发出来的无助。这种声音会成为我对它的回忆。
                </sc-tab>
                <sc-tab class="text-body2">
                    <text>它如同从天上搭路而来的小小顽童。这样美，这样安静，与世隔绝地生存。也一样会衰老，会死去，会化作尘土。</text>
                        <text>如果能够有对时间的更多的把握性，也许我们会对彼此更为珍重。</text>
                </sc-tab>
            </sc-tab-group>
```

```js
page({
    data:{
       tabList: [
         {
            label: 'tab1',
            id: 'waiting',
            name: 'waiting'
         }, {
            label: '很长的标题。。。。。。。。',
            id: 'passed',
            name: 'passed'
         }, {
            label: 'tab2',
            id: 'fail',
            name: 'fail'
         },
         {
             label: 'tab3',
             id: 'cancel',
             name: 'cancel'
         }]
    }
})
```

##### 属性

| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
|ripple|Boolean|true|点击是否涟漪
|tabList|Array||生成tab的数组，包含label,id,以及name|
|tabIndex|Number|0|初始化的时候的tab位置|
|transition|Boolean|true|是否开启动画过渡|
|driverColor|String|#0088CC|tab位置指示条的颜色|

##### slot
|name|说明|
| ------------ | ------------ |
|default|sc-tab|

##### 外部类
| 属性名  | 类型  |	默认值 |	说明 |
| ------------ | ------------ | ------------ | ------------ |
| sc-class| String | | sc-tab-group 头部元素类|
| active-class| String | | 头部激活类|