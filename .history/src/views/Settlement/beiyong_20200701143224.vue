 // 从购物车购买
      if (this.list[1] === false) {
        this.$api
          .order(
            this.add.address,
            this.add.tel,
            this.orderId,
            this.total,
            this.idDirect,
            this.orderId.length
          )
          .then(res => {
            this.$router.push("/");
            Toast({
              message: res.msg,
              icon:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593419078985&di=2823bf1087891bf9c22cef3a0e0ac2f4&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F78%2F581131d0d6ede_610.jpg"
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
      // 直接购买
      else {
        // 将字符串转换成数组 .split(",")
        this.orderId = this.obj.id.split(",");
        console.log(this.orderId);
        this.$api
          .order(
            this.add.address,
            this.add.tel,
            this.orderId,
            this.obj.count * this.obj.present_price,
            this.list[1],
            this.obj.count
          )
          .then(res => {
            this.$router.push("/");
            Toast({
              message: res.msg,
              icon:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593419078985&di=2823bf1087891bf9c22cef3a0e0ac2f4&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F33%2F78%2F581131d0d6ede_610.jpg"
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }