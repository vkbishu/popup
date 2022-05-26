export default {
    namespaced: true,
    state(){
        return {
            endpoint: '',
            method: null,
            params: [],
            body: ''
        }
    },
    mutations: {
        updateEndpoint(state, payload){
            state.endpoint = payload;
        },
        updateMethod(state, payload){
            state.method = payload;
        },
        updateBody(state, payload){
            state.body = payload;
        },
        addParam(state){
            state.params.push({
                param_key: '',
                param_val: ''
            });
        },
        removeParam(state, index){
            state.params.splice(index, 1);
        },
        setParam(state, payload){
            const {index, param_name, param_val} = payload;
            state.params[index][param_name] = param_val;
        }
    }
}