export default function combineEvents(reducers, initialState) {
  return (state = initialState, action) => {
    if (reducers[action.type]) {
      return reducers[action.type](state, action);
    } else if (reducers.default) {
      return reducers.default(state, action);
    }
    return state;
  };
}
