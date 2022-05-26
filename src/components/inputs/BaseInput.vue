<template>
    <div class="mb-3 form-group">
        <label for="" v-if="label">{{label}}</label>
        <input type="text" class="form-control form-group--input" :class="{'with-icon': icon !== ''}" aria-label="Search" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" @keypress.enter="$emit('onSubmit')">
        <b-icon :icon="icon" class="form-group--icon" :class="{'c-pointer': isClickableIcon}" @click="isClickableIcon && $emit('onSubmit')" font-scale="1.5"></b-icon>
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    props: {
        value: String,
        icon: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: String,
        isClickableIcon: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.form-group {
    position: relative;
    &--input {
        &.with-icon {
            padding-left: 40px;
        }
        border-radius: 14px;

        &:focus {
            box-shadow: none;
        }
    }
    &--icon {
        position: absolute;
        left: 12px;
        top: 10px;
        fill: #b5a7a7;
    }
}
</style>