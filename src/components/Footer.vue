<template>
  <footer class="footer flex-middle">
      <div class="footer-inner flex-middle-between">
          <div class="contact">
              <p class="title">联系我们</p>
              <p class="skype" @click="app.opSkype">Skype: vivayys0</p>
              <p class="tg" @click="app.openTg">Telegram: @iris1934</p>
          </div>
          <div class="declaration">
              <p class="title">超级签名一次</p>
              <p class="text">安装永不受影响</p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterSkin',
    inject: ['app']
}
</script>

<style lang="less">
.footer{
    &{width: 100%;height: 246px;background-color: #24282f;position: relative;color: #fff;}
    .footer-inner{width: 66%;margin: 0 auto;}
    .contact{
        &{font-size: 16px;font-family: Microsoft YaHei;font-weight: 400;}
        .title{font-size: 18px;font-weight: 700;}
        .skype, .tg{cursor: pointer;}
        .skype{margin-top: 15px;}
        .tg{margin-top: 2px;}
    }
    .declaration{
        &{width: 180px;height: 80px;text-align: right;}
        .title{margin-top: 10px;font-size: 19px;}
        .text{margin-top: 10px;font-size: 23px;}
    }
}
</style>>