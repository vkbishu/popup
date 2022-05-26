export default {
    namespaced: true,
    state: () => ({
        tagList: []
    }),
    mutations: {
        addTag(state, payload){
            console.log("adding tag: ", payload);
            state.tagList.push(payload);
        },
        removeTag(state, index){
            state.tagList.splice(index, 1);
        }
    }
}