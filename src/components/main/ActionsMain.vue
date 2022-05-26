<template>
    <div class="h-100">
        <div v-if="selectedActions.length > 0">
            <template v-for="item in selectedActions">
                <component  :is="item.main" :key="item.key" v-if="item.main"></component>
            </template> 
        </div>
        <div v-else class="d-flex h-100 no-actions">
            <div  class="m-auto text-center msg flex-grow-1">
                <h3>Your actions will appear here</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-actions {
    border: 1px dashed #ddd;
    background-color: #F9F9F9;
    border-radius: var(--border-radius);
}
.msg {
    max-width: 290px;
    color: #C2CCD6;
}
</style>

<script>
import {mapState} from "vuex"
export default {
    name: "ActionsMain",
    computed: {
        ...mapState('actions', [
            'selectedActions'
        ])
    },
    components: {
        TagCustomerMain: () => import('@/components/main/TagCustomerMain'),
        MakeHttpRequestMain: () => import('@/components/main/MakeHttpRequestMain'),
    }
}
</script>