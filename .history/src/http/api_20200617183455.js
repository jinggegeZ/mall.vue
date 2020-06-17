// 封装所有的请求
import service  from  './index'

export default {
    // 登录页
    login(params){
        return service.post('./')
    },
    // 首页所有数据
    recommend(){
        return service.get('/recommend')
    },
    // 搜索页
    serach(value){
        return service.get(`/search?value=${value}`)
    },
    // 分类查询(get)
    classification(id){
        return service.get(`/classification?mallSubId=${id}`)
    },
    // 查询获取购物车数据(get)
    Card(){
        return service.get('/getCard')
    },
    // 购物车加减商品(post)
    editCart(count,id,mallPrice){
        return service.post(`/editCart`)
    }
}