const intialState = {
    cars: [],
};

export const carsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_CARS':
            return { ...state, cars: payload };
        default:
            return state;
    }
};
