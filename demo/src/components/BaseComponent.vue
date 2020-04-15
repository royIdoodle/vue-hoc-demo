<template>
    <div>
        <span @click='handleClick'>props: {{test}}</span>
        <!-- 具名插槽 -->
        <slot name='slot1'/>
        <p>===========</p>
        <!-- 默认插槽 -->
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'BaseComponent',
        props: {
            test: Number
        },
        methods: {
            handleClick () {
                this.$emit('customize-click')
            }
        }
    }
</script>
