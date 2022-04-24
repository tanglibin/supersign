<template>
  <header class="header">
      <div class="header-inner flex-between-middle">
          <div class="header-left flex-middle">
              <span class="lf"></span>
              <span class="ri">ET签</span>
          </div>
          <nav class="header-nav flex-between">
              <a :class="['nav-item', {'avtive': item.key && item.url == $route.path}]" v-for="item in nav" :key="item.key" @click="$router.push(item.url)">{{item.name}}</a>
          </nav>
          <span class="header-right"></span>
      </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderSkin',
    data(){
        return {
            nav: [
                {key: 0, name: '首页', url: '/'},
                {key: 1, name: '超级签名', url: '/super'},
                {key: 2, name: '网页封装', url: '/encapsulation'},
                {key: 3, name: '分发托管', url: '/distribute'},
                {key: 4, name: 'APP上架', url: '/shelf'},
                {key: 5, name: '关于我们', url: '/about'},
            ]
        }
    },
}
</script>

<style lang="less">
.header{
    &{position: absolute;top: 0;left: 0;width: 100%;z-index: 999;color: #fff;}
    .header-inner{width: 100%;max-width: 1200px;height: 90px;margin: 0 auto;}
    .header-left{width: 23%;}
    .lf{width: 160px;}
    .ri{width: 140px;font-size: 23px;font-weight: bold;text-align: center;}
    .header-right{width: 100px;margin-left: 10px;}
    .header-nav{flex: 1;max-width: 1000px;min-width: 350px;margin-left: 60px;}
    .nav-item{cursor: pointer;font-size: 16px;height: 30px;line-height: 30px;text-align: center;}
    .avtive{border-bottom: 2px solid #fff;}
}
</style>