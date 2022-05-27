<template>
    <div class="wrapper layout-tab">
        <div class="container-fluid p-3" style="height:100vh">
            <div class="row h-100">
                <div class="col-md-4 p-0 h-100">
                    <slot name="sidebar"></slot>
                </div>
                <div class="col-md-8 h-100">
                    <div class="grey_box p-3 h-100 overflow-auto" :class="{'white_box': hasNoActions}">
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
   computed:{
       hasNoActions(){
           return this.$store.state.actions.selectedActions.length === 0
       }
   }
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1115px;
    margin: auto;
}
</style>