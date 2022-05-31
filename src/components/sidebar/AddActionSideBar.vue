<template>
     <side-bar>
         <template v-slot:title>
             <div class="text-dark">
                <b-icon icon="chevron-left" class="mr-3" font-scale="1.5" @click="$emit('resetSideBar')" style="cursor:pointer;"></b-icon>
                Add Actions
            </div> 
         </template>
         <div class="p-4">
            <SearchBox v-model="term"/>
            <div class="mb-3">
                <div class="text-secondary fs-sm mb-2"  v-if="nativeAction.length > 0">Native popup actions</div>
                <ListItemCheckbox  
                    v-for="item in nativeAction" 
                    :key="item.key" 
                    :text="item.title"
                    :icon="item.icon"
                    :inputVal="item.key"
                    v-model="selected"
                />
            </div>
            <div class="mb-3">
                <div class="text-secondary mb-2 fs-sm" v-if="nonNativeAction.length > 0">Integrations with other apps</div>
                <ListItemCheckbox  
                    v-for="item in nonNativeAction" 
                    :key="item.key" 
                    :text="item.title"
                    :icon="item.icon"
                    :inputVal="item.key"
                    v-model="selected"
                />
            </div>
         </div>
         <template v-slot:footer>
             <div class="text-center" v-if="selected.length > 0">
                <button class="btn btn-default action-btn mr-3" @click="selected=[]">Cancel</button>
                <button class="btn btn-primary action-btn" @click="addAction">Confirm</button>
             </div>
         </template>
    </side-bar>
</template>

<script>
import SideBar from "./SideBar"
import SearchBox from "../inputs/SearchBox"
import ListItemCheckbox from "../ListItemCheckbox"
import { mapMutations} from "vuex"
export default {
    name: "AddActionSideBar",
    components: {
        SideBar,
        SearchBox,
        ListItemCheckbox
    },
    data(){
        return {
            term: '',
            actions: [
                {
                    title: 'Tag Customer',
                    icon: 'tag',
                    key: 'tag-customer',
                    isNative: true,
                    sidebar: 'TagCustomerSideBar',
                    main: 'TagCustomerMain'
                },
                {
                    title: 'Tag order',
                    icon: 'tag',
                    key: 'tag-order',
                    isNative: true,
                },
                {
                    title: 'Send email notification',
                    icon: 'envelope',
                    key: 'send-email',
                    isNative: true,
                },
                {
                    title: 'Select digital product',
                    icon: 'clipboard-check',
                    key: 'select-digital-product',
                    isNative: true,
                },
                {
                    title: 'Make HTTPS request',
                    icon: 'shield-check',
                    key: 'make-https-request',
                    isNative: true,
                    sidebar: 'MakeHttpRequestSideBar',
                    main: 'MakeHttpRequestMain'
                },
                {
                    title: 'Send data to Google Sheet',
                    icon: 'tag',
                    key: 'send-to-google-sheet',
                    isNative: false,
                }
            ],
            selected: []
        }
    },
    computed: {
        nativeAction(){
            return this.actions.filter(item => {
                return item.title.toLowerCase().indexOf(this.term.trim().toLowerCase()) !== -1 && item.isNative
            })
        },
        nonNativeAction(){
            return this.actions.filter(item => {
                return item.title.toLowerCase().indexOf(this.term.trim().toLowerCase()) !== -1 && !item.isNative
            })
        }
    },
    methods: {
        ...mapMutations('actions', [
            'setSelectedActions'
        ]),
        addAction(){
            const result = this.actions.filter(item => {
                return this.selected.indexOf(item.key) !== -1
            })
            .map(item => {
                item.isActive = true
                return item
            })
            
            this.setSelectedActions(result);
            this.$emit('resetSideBar');
        }
    }
}
</script>