import axios from 'axios'

const houseActions = {
    
    getHouses: () => {
        return async (dispatch, getState) =>{
            const response = await axios.get('http://localhost:4000/api/houses')
            const houses = response.data

            dispatch({
                type: 'GET_HOUSES',
                payload: houses.response
            })
            
        }
    },

    getHouseByUser: (token) => {
        return async (dispatch, getState) =>{
            const response = await axios.get('http://localhost:4000/api/houseByUser',{    
            headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        
            const housesUser = response.data
            dispatch({
                type:'GET_HOUSE_BY_USER',
                payload: housesUser.response
            })
            
            return (housesUser)
        }
    },
    

    getHouseById: (houseId) => {
        
        return async (dispatch, getState) =>{
            const response = await axios.get('http://localhost:4000/api/house/'+ houseId)
            const house = response.data

            dispatch({
                type: 'GET_HOUSE'
            })

            return (house)
        }
    },



    uploadHouse:(token) =>{
        return async (dispatch, getState)=>{
            await axios.post('httpe://localhost:4000/api/houses',{},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({
                type: 'UPLOAD_HOUSE'
            })
        }
    },
    housesFiltered: (filter) => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'FILTERED_HOUSES',
                payload: filter
            })
        }
    }
}

export default houseActions