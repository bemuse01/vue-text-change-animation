const method = {
    createText(param){
        let arr = []
        param.arr.forEach(e => {
            arr.push({
                id: arr.length,
                param: {
                    text: e,
                    play: true
                },
                style: {
                    opacity: '0.5'
                },
                display: e
            })
        })
        console.log(arr)
        return arr
    },
    createRandomIndex(param){
        let arr = []
        for(let i = 0; i < param.arr.length; i++) arr[i] = i
        return util.shuffle(arr)
    }
}