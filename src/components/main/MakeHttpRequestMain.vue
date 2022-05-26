<template>
    <panel
    :is-active="isActive"
    :is-disabled="isDisabled"
    >
        <template v-slot:header>
            <b-icon class="mr-2" icon="shield-check" font-scale="1.5"></b-icon>
            Make HTTPS Request
        </template>
        <div class="content">
            <div class="block">
                <div class="text-secondary block__title">Request endpoint</div>
                <div class="block__text">{{endpoint | checkBlank}}</div>
            </div>
            <div class="block">
                <div class="text-secondary block__title">Request method</div>
                <div class="block__text">{{method | checkBlank}}</div>
            </div>
            <div class="container">
                <div class="row sub-block">
                    <div class="col text-secondary">Key</div>
                    <div class="col text-secondary">Value</div>
                </div>
                <div v-for="(item, index) in params" :key="index" class="row sub-block">
                    <div class="col-sm-6">{{item.param_key | checkBlank}}</div>
                    <div class="col-sm-6">{{item.param_val | checkBlank}}</div>
                </div>
            </div>
            <div class="block">
                <div class="text-secondary mb-3">Request body</div>
                <b-form-textarea
                placeholder=""
                rows="6"
                no-resize
                v-model="body"
                readonly
            ></b-form-textarea>
            </div>
        </div>
    </panel>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: "MakeHttpRequestMain",
    computed: {
       ...mapState('https', [
           'endpoint',
           'method',
           'params',
           'body'
       ]),
       ...mapState(['mainComponent']),
       isActive(){
            return this.mainComponent === 'MakeHttpRequestMain'
        },
        isDisabled(){
            return this.$store.state.actions.selectedActions.some(item => {
                return item.key === 'make-https-request' && !item.isActive
            })
        }
    },
    filters: {
        checkBlank(val){
            return val && val.length > 0 ? val : '-'
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    border-top: 1px solid var(--gray);
}
.block {
    min-height: 5rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ddd;

    &__title {
        margin-bottom: 0.4rem;
    }

    &:last-child {
        border-bottom: none;
    }
}

.sub-block {
    padding: 1rem 1rem;
    border-bottom: 1px solid #ddd;
}
</style>