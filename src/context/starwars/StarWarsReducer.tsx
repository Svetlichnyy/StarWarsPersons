import { SET_HISTORY, GET_PERSON, GET_PERSONS} from "../types";

const handlers = {
    [SET_HISTORY]: (state:any, action:any) => ({ ...state, history: action.payload}),
    [GET_PERSON]: (state:any, action:any) => ({ ...state, person: action.payload}),
    [GET_PERSONS]: (state:any,action:any) => ({ ...state,persons: action.payload}),
    DEFAULT: (state: any) => state,
}

export const StarWarsReducer = (state:any, action:any) => {
    // @ts-ignore
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}