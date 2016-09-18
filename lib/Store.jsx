import Constants from './Constants';
import assign from 'lodash.assign';

const initialState = { //define initial state - an empty filter set
    filters: [],
    filters_available: {},
    filters_enabled: [],
};

export default function configureStore(props) {
    let combinedState = assign({},initialState,props);

    let store = (state = combinedState, action) => {

        switch (action.type) {

            case Constants.FILTER_ENABLE:
                return {
                    ...state,
                    filters_enabled: [...state.filters_enabled,action.name],
                    filters: [...state.filters, state.filters_available[action.name] ]
                };

            case Constants.FILTER_DISABLE:
                let disableIndex = _.indexOf(state.filters_enabled,action.name);
                return {
                    ...state,
                    filters_enabled: [
                        ...state.filters_enabled.slice( 0, disableIndex ),
                        ...state.filters_enabled.slice( disableIndex + 1 ),
                    ],
                    filters: [
                        ...state.filters.slice( 0, disableIndex ),
                        ...state.filters.slice( disableIndex + 1 )
                    ]
                };

            case Constants.FILTER_TOGGLE:
                let toggleIndex = _.indexOf(state.filters_enabled,action.name);
                return toggleIndex == -1 ?
                    {
                        ...state,
                        filters_enabled: [...state.filters_enabled,action.name],
                        filters: [...state.filters, state.filters_available[action.name] ]
                    } :
                    {
                        ...state,
                        filters_enabled: [
                            ...state.filters_enabled.slice( 0, toggleIndex ),
                            ...state.filters_enabled.slice( toggleIndex + 1 ),
                        ],
                        filters: [
                            ...state.filters.slice( 0, toggleIndex ),
                            ...state.filters.slice( toggleIndex + 1 )
                        ]
                    };

            case Constants.FILTER_REGISTER:
                return { ...state, filters_available: {
                    ...state.filters_available, [action.name]: action.filter
                } };

            case Constants.FILTER_UNREGISTER:
                return { ...state, filters_available: _.omit(state.filters_available,action.name)};

            case Constants.FILTER_CLEAR:
                return { ...state, filters_enabled: [], filters: [] };

            case Constants.FILTER_RESET:
                return initialState;

            default:
                return state;
        }
    };

    return store;
}