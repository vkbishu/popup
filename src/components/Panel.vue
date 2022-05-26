<template>
    <div class="panel mb-3" :class="{'active': isActive, 'is-disabled': isDisabled}">
       <div class="panel__header">
           <slot name="header"></slot>
       </div>
       <div class="panel__body" v-if="$slots.default">
          <slot></slot>
       </div>
    </div>
</template>

<script>
export default {
    name: "Panel",
    props: ['isActive', 'isDisabled']
}
</script>


<style lang="scss" scoped>
.panel {
    border: 1px solid #ddd;
    border-radius: 14px;
    background-color: #fff;
    &__header {
        padding: 1rem;
        font-weight: 600;
    }

    &.active {
        border: 1px solid var(--primary);
    }
    &.is-disabled {
        color: var(--gray);
        .panel__body {
            display: none;
        }
    }
}
</style>