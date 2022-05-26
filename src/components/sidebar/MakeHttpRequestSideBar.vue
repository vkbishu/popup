<template>
     <side-bar>
         <template v-slot:title>
             <div class="text-dark">
                <b-icon icon="chevron-left" class="mr-3" font-scale="1.5" @click="$emit('resetSideBar')" style="cursor:pointer;"></b-icon>
                Make HTTPS Request
            </div> 
         </template>

         <template v-slot:action>
             <SideBarDropDownAction 
             component-key="make-https-request"
             />
         </template>

         <!-- content -->
         <div class="p-4">
             <base-input
                label="Request endpoint"
                placeholder="Enter endpoint..."
                class="mb-4"
                v-model="endpoint"
             ></base-input>
            
            <div class="form-group mb-3">
                <label for="">Request method</label>
                <b-form-select :options="options" v-model="method"></b-form-select>
            </div>
            
            <div class="params mb-4">
                <table class="table params__table">
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                        <th><b-icon icon="plus" font-scale="2" class="text-primary c-pointer" @click="addParam"></b-icon></th>
                    </tr>
                    <tr class="align-items-center" v-for="(item, index) in params" :key="'row-'+index">
                        <td>
                            <input type="text" class="form-control no-border" placeholder="enter key..." :value="item.param_key" @input="setParam(index, 'param_key', $event.target.value)">
                        </td>
                        <td>
                            <input type="text" class="form-control no-border" placeholder="enter value..."  :value="item.param_val" @input="setParam(index, 'param_val', $event.target.value)">
                        </td>
                        <td style="vertical-align:middle"><b-icon icon="trash" font-scale="1.5" @click="removeParam(index)" class="c-pointer"></b-icon></td>
                    </tr>
                </table>
            </div>

            <div class="form-group mb-3">
                <label for="">Request body</label>
            <b-form-textarea
                placeholder=""
                rows="6"
                v-model="body"
            ></b-form-textarea>
            </div>

         </div>
    </side-bar>
</template>

<script>
import SideBar from "./SideBar"
import SideBarDropDownAction from "@/components/SideBarDropDownAction"
export default {
    name: "TagCustomerSideBar",
    components: {
        SideBar,
        SideBarDropDownAction
    },
    data(){
        return {
            options: [
               { value: null, text: 'choose method...' },
               { value: 'Get', text: 'Get' },
               { value: 'Post', text: 'Post' },
               { value: 'Put', text: 'Put' },
               { value: 'Delete', text: 'Delete' },
               { value: 'Patch', text: 'Patch' },
            ],
        }
    },

    computed: {
        endpoint: {
            get(){
                return this.$store.state.https.endpoint
            },
            set(val){
                this.$store.commit('https/updateEndpoint', val)
            }
        },
        method: {
            get(){
                return this.$store.state.https.method
            },
            set(val){
                this.$store.commit('https/updateMethod', val)
            }
        },
        body: {
            get(){
                return this.$store.state.https.body
            },
            set(val){
                this.$store.commit('https/updateBody', val)
            }
        },
        params:{
            get(){
                return this.$store.state.https.params
            },
        }
    },

    methods: {
        addParam(){
            this.$store.commit('https/addParam')
        },
        removeParam(index){
            this.$store.commit('https/removeParam', index)
        },
        setParam(index, param_name, param_val){
            this.$store.commit('https/setParam', {
                index,
                param_name,
                param_val
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.params {
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
    &__table {
        margin-bottom: 0;
        th, td {
            padding: 0.5rem 0;
        }

        td {
            border-right: 1px solid var(--gray);
        }

        td:last-child{
            text-align: right;
            border-right: 0;
            padding: 0.7rem;
        }

        th {
            padding-left: 0.5rem;
            border-top: 0;
            font-weight: normal;
            color: var(--gray-dark);
            vertical-align: middle;
            width: 43%;
        }

    }
}

</style>