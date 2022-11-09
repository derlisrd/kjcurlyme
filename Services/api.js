
const API_END_POINT = 'https://www.freetogame.com/api/'

export const APICALLER = {

    get: async({params})=>{

        try {
           let res = await fetch(`${API_END_POINT}${params}`, {cache: 'no-store'}) 
           let json = await res.json()

           return {
            results: json,
            response: true,
            error:false,
            message:null
           }
        } catch (error) {
            return {
                results: [],
                response: false,
                error:true,
                message:error.message
            }
        }

    }
}