<template>
    <div class="fomr-control mb-3 search">
        <input type="text" class="form-control search--input" aria-label="Search" placeholder="search" :value="value" @input="$emit('input', $event.target.value)">
        <b-icon icon="search" class="search--icon"></b-icon>
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    props: ['value']
}
</script>

<style lang="scss" scoped>
.search {
    position: relative;
    &--input {
        padding-left: 40px;
        border-radius: 14px;

        &:focus {
            box-shadow: none;
        }
    }
    &--icon {
        position: absolute;
        left: 12px;
        top: 12px;
        fill: #b5a7a7;
    }
}
</style>