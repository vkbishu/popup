<template>
    <div class="sidebar white_box d-flex flex-column h-100 br-1">
        <div class="sidebar__header p-3 border-bottom">
            <div class="d-flex align-items-center justify-content-between">
                <div class="sidebar__title">
                    <slot name="title"></slot>
                </div>
                <div class="sidebar__action ml-auto">
                    <slot name="action"></slot>
                </div>
            </div>
        </div>
        <div class="sidebar__content">
            <slot></slot>
        </div>
        <div class="sidebar__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style lang="scss" scoped>
.sidebar {
   &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
   }

   &__content{
       flex-grow: 1;
       overflow: auto;
   }

   &__footer {
       padding: 1rem;
       border-top: 1px solid var(--gray);
       text-align: center;
       box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.09);
   }
}
</style>