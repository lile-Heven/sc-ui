/**
 * Created by bai on 2018/5/2
 */
Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
        value: {
            type: null,
        },
        checked: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        label: {
            type: String
        },
        ripple:{
            type:Boolean,
            value:true
        },
        reverse:{
            type:Boolean,
            value:false
        },
        color:{
            type:String,
            value:'#ff4081'
        }
    },
    data: {
        checked: false,
        clicked: false
    },
    ready() {
        this.setData({
            checked:this.properties.checked
        })
    },
    relations: {
        '../scCheckboxGroup/sc-checkbox-group': {
            type: 'parent',
        }
    },
    externalClasses: ['sc-class'],
    methods: {
        _changeCheck(e) {
            this.setData({
                checked: !this.data.checked,
                clicked: true
            });
            this.triggerEvent(`checkchange`, {checked:this.data.checked,value:this.properties.value}, { bubbles: true, composed: true });
        },
        _animationend() {
            this.setData({
                clicked: false
            })
        },
    }
});