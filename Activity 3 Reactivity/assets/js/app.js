
var app  = new Vue({
    el: '#app',
    data:{
        counter:  0,
    },
    methods:{
        add(num){
            this.counter += num;
        },
        result(){
            if(this.counter === 0){
                return '0';
            }
            else if(this.counter < 37){
                return 'not there yet';
            }else if(this.counter > 37){
                return 'Too much!';
            }else{
                return this.counter;
            }
        }
    },
    
    watch:{
        counter(value){
            if(value >= 37){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                }, 5000)
            }
        }
    }
})






     
