<template>
    <div class="wrapper layout-tab">
        <div class="container-fluid p-3" style="height:100vh">
            <div class="row h-100">
                <div class="col-md-4 p-0 h-100">
                    <slot name="sidebar"></slot>
                </div>
                <div class="col-md-8 h-100">
                    <div class="white_box p-3 h-100 overflow-auto">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BaseLayout",
    components: {
       
    }
   
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1115px;
    margin: auto;
}
</style>