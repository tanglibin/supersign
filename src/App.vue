<template>
  <header-skin />
  <router-view />
  <footer-skin />
  <article class="toolbar">
      <div class="item flex-middle" @click="opSkype">
          <i class="skype"></i>
          <span>vivayys0</span>
      </div>
      <div class="item flex-middle" @click="openTg">
          <i class="tg"></i>
          <span>@iris1934</span>
      </div>
  </article>
</template>

<script>
import HeaderSkin from '@components/Header'
import FooterSkin from '@components/Footer'
export default {
    name: 'App',
    provide(){
        return {
            app: this
        }
    },
    components: {
        HeaderSkin,
        FooterSkin
    },
    methods: {
        /**打开 telegram */
        openTg(){
            window.open('https://t.me/iris1934');
        },

        /**打开Skype */
        opSkype(){
            window.open('skype:vivayys0?chat');
        }
    }
}
</script>

<style lang="less">
:root {
    --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
}

::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background-color: #fff;
}
::-webkit-scrollbar-thumb {
    border-radius:5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: rgba(0, 0, 0, .1)
}

*{padding: 0;margin: 0;box-sizing: border-box;}

html, body, #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

html {
    -webkit-tap-highlight-color: transparent;
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #515a6e;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    border-style: none;
}

#app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: 0!important;
    box-sizing: 0!important;
    position: relative;
}

[class*="flex"]{
    &{display: flex;}
    &[class*="wrap"]{flex-wrap: wrap;}
    &[class*="between"]{justify-content: space-between;}
    &[class*='middle']{align-items: center;}
    &[class*='center']{justify-content: center;}
    &[class*="around"]{justify-content: space-around;}
    &[class*="aroundy"]{align-content:space-around;}
    &[class*="column"]{flex-direction: column;}
    &[class*="top"]{align-items:flex-start}
}

.banner{
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    height: 742px;
}

.function-title{display: block;width: 795px;height: 91px;margin: 0 auto;}
.toolbar{
    &{position: fixed;top: 230px;right: 0;z-index: 99999;}
    .item{
        &{
            background-image: linear-gradient(to right, #D4145A , #A61967);
            cursor: pointer;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            height: 45px;
            border: 1px solid #fff;
            margin: 2px 0;
            border-radius: 50px 0 0 50px;
            padding-left: 12px;
            transform: translateX(92px);
            transition: all .3s;
        }
        &:hover{
            transform: translateX(0);
        }
    }
    i{width: 23px;height: 22px;background-repeat: no-repeat;background-size: cover;margin-right: 16px;}
    .skype{background-image: url('./assets/image/common/skype.png');}
    .tg{background-image: url('./assets/image/common/tg.png');}
}
</style>