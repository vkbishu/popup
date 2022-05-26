<template>
     <side-bar>
         <template v-slot:title>
             <div class="text-warning">
                <b-icon icon="brightness-alt-high-fill" class="mr-3" font-scale="1.5"></b-icon>
            Action</div> 
         </template>
         <div class="p-3">
            <div class="mb-3 actions">
                <div class="actions__title mb-2">Assigned actions</div>
                <div class="actions__text">The selected actions will run in the background when the user journey gets to this element</div>
                <div class="actions__list">
                    <div class="actions__item d-flex align-items-center justify-content-between" :class="{'actions__item--inactive': !item.isActive}" v-for="item in selectedActions" :key="item.key" @click="setAction(item)">
                        <div>
                            <b-icon :icon="item.icon" class="mr-3" font-scale="1.5"></b-icon>
                            <span>{{item.title}}</span>
                        </div>
                       <span class="actions__text--inactive" v-if="!item.isActive">Inactive</span>
                    </div>
                    <div class="actions__item actions__item--btn d-flex align-items-center justify-content-between" @click="$emit('updateSideBar', 'AddActionSideBar')">
                        <div class="action--add--text">Add actions</div>
                        <div class="action--add--icon">
                            <b-icon icon="plus" font-scale="2"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </side-bar>
</template>

<script>
import SideBar from "./SideBar"
import {mapMutations, mapState} from "vuex"
export default {
    name: "ActionSideBar",
    components: {
        SideBar
    },
    computed: {
        ...mapState('actions', [
            'selectedActions'
        ])
    },
    methods: {
        ...mapMutations([
            'setSideBar',
            'setMain'
        ]),
        setAction(item){
            if(!item.isActive || !item.main){
                return false;
            }
            this.setSideBar(item.sidebar)
            this.setMain(item.main)
        }
    }
}
</script>

<style lang="scss" scoped>
.actions {
    &__title {
        font-weight: bold;
        color: #475461;
        font-size: 1rem;
    }

    &__text {
        font-size: 0.9em;
        color: #9DA8B4;
    }

    &__item {
        padding: 22px;
        border-bottom: 1px solid #ebedee;
        cursor: pointer;

        &:hover {
            background-color: #F2F2F3;
        }

        &--btn {
            color: var(--primary);
            font-weight: bold;
        }

        &--inactive {
            color: var(--gray);
            cursor: auto;
        }
    }

    .actions__text--inactive {
        font-size: 14px;

        &::before{
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: var(--gray);
            border-radius: 50%;
            margin-right: 3px;
            position: relative;
            top: 1px;
        }
    }

    &__item:last-child {
        border-bottom: none;
    }

    &__list {
        margin-top: 1rem;
        border: 1px solid #E3E6E8;
        border-radius: 15px;
        overflow: hidden;
    }

    
}
</style>