var app = new Vue({
    el:"#app",
    data:{
        products:[{id:1,title:"Часник Дюшес", short_text:'Один із нових сортів часнику «Дюшес» позиціонується селекціонерами як ранньостиглий', Image:'dyshesChasnyk.jpg', desc:"Full desc"},
        {id:2,title:"Часник Лідер", short_text:'Лідер відноситься до озимих сортів, що відрізняється високою врожайністю і відмінними якісними характеристиками', Image:'liderChasnyk.jpg', desc:"Full desc"},
        {id:3,title:"Часник Прометей", short_text:'Прометей адаптований для культивування в середній смузі України, відрізняється високими показниками лежкості', Image:'PrometeyChasnyk.jpg', desc:"Full desc"},
        {id:4,title:"Софіївський Часник", short_text:'Часник Софіївський фіолетовий - озимий, середньостиглий, високоврожайний сорт, з відмінними смаковими якостями.', Image:'sofiiChasnyk.jpg', desc:"Full desc"},
        {id:5,title:"Часник Спас", short_text:'Цибулина округло-овальної, дещо неправильної, форми зі слабким збігом вверх', Image:'spasChasnyk.jpg', desc:"Full desc"}]
    },
    mounted:function(){
        console.log(window.localStorage.getItem('prod'));
    },
    methods:{
        addItem:function(id){
            window.localStorage.setItem('prod', id)
        }
    }
})