const initialState = {
    status: "All",
    colors: [],
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case "statusFilterChanged": {
            return {
                ...state,
                status: action.payload,
            }
        }
        case "colorFilterChanged": {
            let {color, changeType} = action.payload
            const {colors} = state
            switch (changeType) {
                case "added": {
                    if (colors.includes(color)) {
                        return state
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color),
                    }
                }
                case "removed": {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            a => a !== color
                        ),
                    }
                }
                default: 
                    return state
            }
        }
        default:
            return state
    }
}