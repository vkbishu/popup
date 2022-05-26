<template>
    <panel
    :is-active="isActive"
    :is-disabled="isDisabled"
    >
        <template v-slot:header>
            <b-icon class="mr-2" icon="tag" font-scale="1.5"></b-icon>
            Tag Customer
        </template>
        <TagList
        />
    </panel>
</template>

<script>
import {mapState} from "vuex"
import TagList from "@/components/TagList"
export default {
    name: "TagCustomerMain",
    components: {
        TagList
    },
    computed: {
        ...mapState(['mainComponent']),
        isActive(){
            return this.mainComponent === 'TagCustomerMain'
        },
        isDisabled(){
            return this.$store.state.actions.selectedActions.some(item => {
                return item.key === 'tag-customer' && !item.isActive
            })
        }
    }
}
</script>
