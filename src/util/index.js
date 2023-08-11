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

    findIndexById(array, id){
        try{
            array.forEach((v, i) => {
                if(v.id === id){
                    throw i
                }
            })
            throw -1
        }catch(i){
            return i
        }
    },

    deleteByIndex(array, index){
        if(index < array.length){
            array.splice(index, 1)
            return true
        }
        return false
    }
}

export default util