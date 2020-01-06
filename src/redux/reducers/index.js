
const initialState = {
    articles: [],
    remotePosts: [],
    remoteComments: []
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_ARTICLE") {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remotePosts: state.remotePosts.concat(action.payload)
        });
    }
    if (action.type === "COMMENT_LOADED") {
        return Object.assign({}, state, {
            remoteComments: state.remoteComments.concat(action.payload)
        });
    }

    return state;
};

export default rootReducer;

