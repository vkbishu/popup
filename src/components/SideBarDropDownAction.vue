<template>
    <div>
        <b-dropdown variant="btn" toggle-class="text-decoration-none" no-caret>
            <template #button-content>
                <b-icon icon="three-dots" font-scale="1.5"></b-icon>
            </template>
            <b-dropdown-item @click.prevent="makeInactive()"> <b-icon icon="brightness-low" class="mr-2"></b-icon> Make Inactive</b-dropdown-item>
            <b-dropdown-item @click.prevent="removeAction()"> <span class="text-danger"><b-icon icon="trash" class="mr-2"></b-icon> Delete Action</span></b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    name: "SideBarDropDownAction",
    props: {
        componentKey: String,
    },
    methods: {
        makeInactive(){
            this.$store.commit('actions/markInactive', this.componentKey);
            this.$store.commit('resetSideBar');
        },
        removeAction(){
            this.$store.commit('actions/removeAction', this.componentKey);
            this.$store.commit('resetSideBar');
        }
    }
}
</script>