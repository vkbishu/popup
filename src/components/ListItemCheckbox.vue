<template>
    <div class="d-flex align-items-center justify-content-between list-item-checkbox">
        <div>
            <b-icon :icon="icon" class="mr-3"></b-icon>
            <span>{{text}}</span>
        </div>
        <b-form-checkbox 
            v-model="model"
            :value="inputVal"
        />
    </div>
</template>

<script>
export default {
    name: "ListItemCheckbox",
    props: {
        text: String,
        icon: String,
        value: Array,
        inputVal: String,
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.list-item-checkbox {
    padding: 14px 0px;
}
</style>