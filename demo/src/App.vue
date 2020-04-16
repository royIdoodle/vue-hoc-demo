<template>
    <div>
        <base-component :test="1" @customize-click="cc1">
            <h2 slot='slot1'>BaseComponent slot</h2>
            <p>default slot</p>
        </base-component>
        <hr>
        <enhanced-com :test="2" @customize-click="cc2">
            <h2 slot='slot1'>EnhancedComponent slot</h2>
            <p>default slot</p>
        </enhanced-com>
        <hr>
        <my-hoc-component :test="3" @customize-click="cc3">
            <h2 slot='slot1'>MyHocComponent slot</h2>
            <p>default slot</p>
        </my-hoc-component>
    </div>
</template>

<script>
    import BaseComponent from './components/BaseComponent.vue'
    import hoc from './hoc.js'
    import myhoc from './myHoc.js'

    const EnhancedCom = hoc(BaseComponent)
    const MyHocComponent = myhoc(BaseComponent)

    export default {
        components: {
            BaseComponent,
            EnhancedCom,
            MyHocComponent
        },
        methods: {
            cc1() {
                console.log('cc1');
            },
            cc2() {
                console.log('cc2');
            },
            cc3() {
                console.log('cc3');
            }
        }
    }
</script>
