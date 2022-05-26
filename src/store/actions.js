export default {
    namespaced: true,
    state: () => ({
        selectedActions: []
    }),
    mutations: {
        setSelectedActions(state, payload){
            state.selectedActions  = payload;
        },
        markInactive(state, key){
            console.log("Inactive: ", key);
            state.selectedActions = state.selectedActions.map(item => {
                if(item.key === key){
                    item.isActive = false;
                }
                return item;
            });
        },
        removeAction(state, key){
            state.selectedActions = state.selectedActions.filter(item => {
               return item.key !== key;
            });
        }
    }
}