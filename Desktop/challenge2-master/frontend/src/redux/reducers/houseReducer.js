const initialState = {
    allHouses:[],
    myHouses:[]
}

const houseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_HOUSES':
            
            return {
                ...state, 
                allHouses: action.payload
            }    
        case 'FILTERED_HOUSES':
            const filteredHouses = state.allHouses.filter(house => 
                house.address.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(action.payload.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) === 0)
            return {
                ...state,
                filteredHouses
            }
        
        case 'GET_HOUSE_BY_USER':
            return {    
                ...state,
                myHouses: action.payload
        }


        default: 
            return state    
    }
}


export default houseReducer