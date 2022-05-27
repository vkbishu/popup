<template>
     <side-bar>
         <template v-slot:title>
             <div class="text-dark">
                <b-icon icon="chevron-left" class="mr-3" font-scale="1.5" @click="$emit('resetSideBar')" style="cursor:pointer;"></b-icon>
                Tag Customer
            </div> 
         </template>

         <template v-slot:action>
             <SideBarDropDownAction 
             component-key="tag-customer"
             />
         </template>

         <!-- content -->
         <div class="p-4">
             <base-input v-model="tag"
                icon="plus"
                placeholder="Add tag..."
                :is-clickable-icon="true"
                @onSubmit="addTag"
             ></base-input>
            
            <TagList 
            :allow-delete="true"
            :no-padding="true"
            />
        </div>
    </side-bar>
</template>

<script>
import SideBar from "./SideBar"
import TagList from "@/components/TagList"
import SideBarDropDownAction from "@/components/SideBarDropDownAction"
export default {
    name: "TagCustomerSideBar",
    components: {
        SideBar,
        TagList,
        SideBarDropDownAction
    },
    data(){
        return {
            tag: '',
        }
    },
    methods: {
        addTag(){
            if(this.tag.trim().length > 0){
               this.$store.commit('tags/addTag', this.tag.trim());
               this.tag = '';
            }
        },
        makeInactive(key){
            this.$store.commit('actions/markInactive', key);
            this.$store.commit('resetSideBar');
        },
        removeAction(key){
            this.$store.commit('actions/removeAction', key);
            this.$store.commit('resetSideBar');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>