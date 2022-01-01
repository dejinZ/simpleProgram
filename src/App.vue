<template>
    <div>
        <Home />
    </div>
</template>
<script>
    import Home from './view/Home.vue'

    const { clientWidth } = document.body
    const html = document.documentElement
    if (html) {
      html.style.fontSize = `${clientWidth / 16}px`
    }

    export default {
        name: 'App',
         components: {
            Home
        }
    }
</script>
<style lang="less" scoped>
    
</style>