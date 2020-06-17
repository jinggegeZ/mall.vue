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
    // 4.查询获取购物车数据(get)
    Card(){
        return service.get('/getCard')
    },
    //5. 购物车加减商品(post)
    editCart(count,id,mallPrice){
        return service.post('/editCart',{
            count:count,
            id:id,
            mallPrice:mallPrice
        })
    },
    // 6. 购物车商品删除(post)
    deleteShop(id){
        return service.post('/deleteShop',{id})
    },
    // 7. 购物车支付页面(post)
    order(address,tel,orderId,totalPrice,idDirect,count){
        return service.post('/order',{
            address:address,
            tel:tel,
            orderId:orderId,
            totalPrice:totalPrice,
            idDirect:idDirect,
            count:count
        })
    },
    // 8.单个商品详情(get)
    one(id){
        return service.get('/goods/one?id=${id}')
    },
    // 9.收藏单个商品(post)
    collection(goods){
        return service.post('/collection',{goods})
    },
    // 10. 取消收藏(post)
    cancelCollection(id){
        return service.post('/cancelCollection',{id})
    }
}