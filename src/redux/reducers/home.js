const initialState = {
    isVisibleVoronoi: true,
    isVisibleDelaunay: true,
    currentNode: null,
    currentPolygon:null,
    pathDijkstra:null
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA_NULL":
            return initialState
        default:
            return state
    }
}

export default homeReducer;