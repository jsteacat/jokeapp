export const mutations = {
    'INIT_JOKES': (state,payload) => {
        state.jokes.push(...payload);
    }
};