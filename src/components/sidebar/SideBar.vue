<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <div class="d-flex align-items-center justify-content-between">
                <div class="sidebar__title">
                    <slot name="title"></slot>
                </div>
                <div class="sidebar__action">
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
    border-radius: 14px;
    box-shadow: 0px 0px 6px rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    background: #fff;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;

    &__header {
        padding: 1rem !important;
        border-bottom: 1px solid #dee2e6 !important;
    }

   &__title {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
   }

   &__content{
       flex-grow: 1;
       overflow: auto;
   }

   &__action{
      margin-left: auto !important;
   }

   &__footer {
       padding: 1rem;
       border-top: 1px solid var(--gray);
       text-align: center;
       box-shadow: 0px 14px 60px rgba(0, 0, 0, 0.09);
   }
}
</style>