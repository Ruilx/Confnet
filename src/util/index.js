const util = {
    findById: (id, list) => {
        try{
            list.forEach((e, i) => {
                if(e.id === id){
                    throw e
                }
            })
            return undefined
        }catch(e){
            return e
        }
    },
}

export default util