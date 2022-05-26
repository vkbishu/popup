<template>
  <div id="app">
      <base-layout>
          <template v-slot:sidebar>
              <component :is="sideBarComponent" @updateSideBar="updateSideBar" @resetSideBar="resetSideBar"></component>
          </template>
          <div v-if="mainComponent" class="h-100">
              <component :is="mainComponent"></component>
          </div>
      </base-layout>
  </div>
</template>


<script>
import '@/assets/css/style.scss'
import {mapState, mapMutations} from "vuex"
export default {
  name: "App",
    computed: {
        ...mapState([
            'sideBarComponent',
            'mainComponent',
            'defaultSideBar'
        ])
    },
    components: {
        ActionSideBar: () => import('@/components/sidebar/ActionSideBar'),
        AddActionSideBar: () => import('@/components/sidebar/AddActionSideBar'),
        TagCustomerSideBar: () => import('@/components/sidebar/TagCustomerSideBar'),
        TagCustomerMain: () => import('@/components/main/TagCustomerMain'),
        MakeHttpRequestSideBar: () => import('@/components/sidebar/MakeHttpRequestSideBar'),
        MakeHttpRequestMain: () => import('@/components/main/MakeHttpRequestMain'),
        ActionsMain: () => import('@/components/main/ActionsMain'),
    },
    methods: {
        ...mapMutations([
            'setSideBar',
            'resetSideBar'
        ]),
        updateSideBar(component){
            this.setSideBar(component)
        }
    }
}
</script>
