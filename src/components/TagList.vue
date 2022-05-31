<template>
    <div class="tag" :class="{'deletable': allowDelete, 'p-3 border-top': !noPadding}" v-if="getTagList.length > 0">
        <div v-for="(item, index) in getTagList" :key="index" class="tag__item">
            <span class="tag__text">{{item}}</span>
            <b-icon icon="trash" v-if="allowDelete" class="c-pointer" font-scale="1.5" @click="deleteTag(index)"></b-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "TagList",
    props: {
        allowDelete: {
            type: Boolean,
            default: false
        },
        noPadding: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        getTagList(){
            return this.$store.state.tags.tagList;
        }
    },
    methods: {
        deleteTag(index){
            this.$store.commit('tags/removeTag', index);
        }
    }
}
</script>

<style lang="scss" scoped>
.tag{
    &__item {
        border: 1px solid var(--gray);
        border-radius: var(--border-radius);
        padding: 15px;
        margin-bottom: 1rem;

        &:nth-child(2n){
            .tag__text {
                &::before{
                    background-color: #4BCFFA;
                }
            }
        }

        &:nth-child(3n){
            .tag__text {
                &::before{
                    background-color: #FF2D55;
                }
            }
        }

        &:nth-child(4n){
            .tag__text {
                &::before{
                    background-color: #FFCD4B;
                }
            }
        }

    }

    &__text {
        &::before{
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 14px;
            border-radius: 50%;
            background-color: #ddd;
            position: relative;
            top: 5px;
        }
    }

    &.deletable {
        .tag__item {
            background-color: var(--grey-light);
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    svg {
        fill: var(--gray-dark);
    }

}
</style>