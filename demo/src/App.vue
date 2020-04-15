<template>
    <div>
        <base-component>
            <h2 slot='slot1'>BaseComponent slot</h2>
            <p>default slot</p>
        </base-component>
        <hr>
        <enhanced-com>
            <h2 slot='slot1'>EnhancedComponent slot</h2>
            <p>default slot</p>
        </enhanced-com>
    </div>
</template>

<script>
    import BaseComponent from './components/BaseComponent.vue'
    import hoc from './hoc.js'

    const EnhancedCom = hoc(BaseComponent)

    export default {
        components: {
            BaseComponent,
            EnhancedCom
        }
    }
</script>
