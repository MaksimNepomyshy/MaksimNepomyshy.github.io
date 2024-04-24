var app = new Vue({
    el:"#app",
    data:{
        products:[{id:1,title:"Часник Дюшес", short_text:'Один із нових сортів часнику «Дюшес» позиціонується селекціонерами як ранньостиглий', Image:'dyshesChasnyk.jpg', desc:"Full desc"},
        {id:2,title:"Часник Лідер", short_text:'Лідер відноситься до озимих сортів, що відрізняється високою врожайністю і відмінними якісними характеристиками', Image:'liderChasnyk.jpg', desc:"Full desc"},
        {id:3,title:"Часник Прометей", short_text:'Прометей адаптований для культивування в середній смузі України, відрізняється високими показниками лежкості', Image:'PrometeyChasnyk.jpg', desc:"Full desc"},
        {id:4,title:"Софіївський Часник", short_text:'Часник Софіївський фіолетовий - озимий, середньостиглий, високоврожайний сорт, з відмінними смаковими якостями.', Image:'sofiiChasnyk.jpg', desc:"Full desc"},
        {id:5,title:"Часник Спас", short_text:'Цибулина округло-овальної, дещо неправильної, форми зі слабким збігом вверх', Image:'spasChasnyk.jpg', desc:"Full desc"}],
        product: [{}], 
        btnVisible: 0,
        cart:[{}],
        contactFields: {
            name: '',
            company:'',
            position:'',
            city:'',
            country:'',
            phone:'',
            email:''
        },
    },
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod', id);
            this.btnVisible = 1;
        },
        getProduct:function(){
           if(window.location.hash){
               var id = window.location.hash.replace('#','');
               if(this.products && this.products.length>0){
                for(i in this.products){
                    if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                }
               }
           }
        },
        addToCart:function(id){
            var cart= [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart: function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!==-1) this.btnVisible=1;
        },
        getCart: function() {
            var cartIds = window.localStorage.getItem('cart');
            if (cartIds) {
                cartIds = cartIds.split(',');
                this.cart = this.products.filter(product => cartIds.includes(String(product.id)));
            }
        },
        removeFromCart: function(id) {
            this.cart = this.cart.filter(item => item.id !== id);
            var cartIds = this.cart.map(item => item.id).join(',');
            window.localStorage.setItem('cart', cartIds);
        },
        makeOrder: function() {
            console.log('Order information:', this.contactFields);
            this.cart = [];
            window.localStorage.removeItem('cart');         
        }
    }
})