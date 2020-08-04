new Vue({
    el: '#wrap',
    data(){
        return{
            text: method.createText(param.text),
            index: method.createRandomIndex(param.text),
            play: {
                text: true
            },
            show: {
                text: true
            },
            delay: {
                text: 1500
            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.animate()
            this.setText()
        },




        changeText(){
            this.index.forEach((e, i) => {
                let index = Math.floor(Math.random() * param.text.change.length),
                    chance = Math.random() > param.text.chance,
                    el = this.text[e]
                
                if(el.param.play && chance) el.display = param.text.change[index]
                if(i === this.index.length - 1 && el.param.play === false){
                    this.play.text = false
                    this.closeText()
                }

            })

            /* this.text.forEach((e, i) => {
                let index = Math.floor(Math.random() * param.text.change.length),
                    chance = Math.random() > param.text.chance

                if(e.param.play && chance) e.display = param.text.change[index]
                if(i === this.text.length - 1 && e.param.play === false) {
                    this.play.text = false
                    this.closeText()
                }
            }) */
        },
        setText(){
            this.index.forEach((e, i) => {
                let el = this.text[e]
                setTimeout(() => {
                    el.param.play = false
                    el.display = el.param.text
                    el.style.opacity = '1'
                }, param.text.delay.offset + param.text.delay.step * i)
            })

            /* this.text.forEach((e, i) => {
                setTimeout(() => {
                    e.param.play = false
                    e.display = e.param.text
                    e.style.opacity = '1'
                }, param.text.delay.offset + param.text.delay.step * i)
            }) */
        },
        closeText(){
            setTimeout(() => {this.show.text = false}, this.delay.text)
        },

        


        render(){
            if(this.play.text) this.changeText()
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})