let counter=1

class strapi{

    constructor(context){
        this.ctx=context
    }

    async getStrapiArticle(slug){
        let articles= await this.ctx.$axios.$get(`http://ringkasan.net:1337/articles?slug=`+slug)
        if (articles.length<1) {
            throw 'article not found'
        }
        return articles[0]
    }

    getArticle(slug){
        return {paras:[
            {paraText:'<h2> Ini para text pertama </h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            paraChart:{url:"/uploads/covid_42724f53e8.jpeg"}},
            {paraText:'<h2> Ini para text kedua </h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            paraChart:{url:"/uploads/Global_crash_fears_as_virus_hammers_US_economy_171c6ccb266_large_5a859856ee.jpeg"}},
            {paraText:'<h2> Ini para text ketiga </h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            paraChart:{url:"/uploads/gettyimages_1208536317_9ad1088644.jpeg"}},
        ]}
    }


}

export default (context,inject)=>{
    inject('strapi',new strapi(context))
}