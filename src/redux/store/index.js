import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('store')
        if (serializedState === null) {
            return undefined
        } else {
            return JSON.parse(serializedState)
        }
    } catch (error) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('store', serializedState)
    } catch (error) {
        console.log(error.message)
    }
}

const persistStore = loadState()

const store = createStore(
    reducers,
    persistStore,
    storeEnhancers(
        applyMiddleware(thunk)
    )
);

store.subscribe(() => {
    saveState(store.getState())
})

export default store;