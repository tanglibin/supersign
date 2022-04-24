<template>
    <div class="super">
        <section class="banner">
            <p class="banner-txt-1">超级签名</p>
            <p class="banner-txt-2">行业首创苹果分发新模式，无需企业签名、无需信任、告别闪退、安装即用</p>
            <p class="banner-txt-3">按需购买、按设备数收费、高效稳定，为您应用分发内测保驾护航</p>
        </section>


        <section class="super-two">
            <img class="function-title" :src="require('@src/assets/image/common/function-title.png')">
            <div class="skin flex-wrap">
                <div class="flex-column-middle">
                    <img :src="require('@src/assets/image/super/function-1.png')">
                    <p class="title-label">掉签概率低</p>
                    <p class="label">特殊签名机制，多证书分布式签名</p>
                    <p class="label">低于企业签名的掉签概率，理论上可使用一年</p>
                </div>
                <div class="flex-column-middle">
                    <img :src="require('@src/assets/image/super/function-2.png')">
                    <p class="title-label">无需上架，无需越狱</p>
                    <p class="label">可以直接分享下载链接下载安装</p>
                    <p class="label">不需要上架AppStore，也不需要手机越狱</p>
                </div>
                <div class="flex-column-middle">
                    <img :src="require('@src/assets/image/super/function-3.png')">
                    <p class="title-label">不植入插件，无后门</p>
                    <p class="label">不以统计启动次数为由植入插件</p>
                    <p class="label">保持应用原样，无后顾之忧</p>
                </div>
                <div class="flex-column-middle">
                    <img :src="require('@src/assets/image/super/function-4.png')">
                    <p class="title-label">应用数量越多，越划算</p>
                    <p class="label">同一设备下载你的多个不同的应用</p>
                    <p class="label">也只收取一次设备费用</p>
                </div>
            </div>
        </section>


        <flow class="super-flow" :list="flow" catalogue="super" />

        <qa :datas="qa"/>
    </div>
</template>

<script>
import Flow from '@components/Flow'
import Qa from '@components/Qa'
export default {
    name: 'Super',
    components: {
        Flow,
        Qa
    },
    data(){
        return {
            flow: ['上传IPA格式的安装包', '开启超级签名服务', '获取链接开始分发'],

            qa: {
                left: [
                    {q: '超级签名稳定性如何？', a: '超级签名掉签几率低，稳定性远远高于企业版分发模式，就算掉签也只会部分设备受影响，并不会所有设备一起掉签'},
                    {q: '对安装包的大小是否有显示？', a: '目前上限不能大于500M，如果单独需要请联系客服。'},
                    {q: '超级签名的APP可以在App Store搜索到吗？', a: '不能，签名后的APP是直接将链接、二维码发给用户直接安装，无需越狱，无需苹果账号，无需苹果审核，方便快捷。'},
                    {q: '支持国外下载吗？', a: '支持国外下载，全网加速。'},
                ],
                right: [
                    {q: '超级签名的APP有下载限制吗？', a: '无安装应用数限制，无下载次数限制，只收取设备费用。重复安装也不会多次扣除费用。'},
                    {q: '需要提供APP的源码吗？', a: '不需要提供，仅需要提供AdHoc形式的ipa安装包即可。'},
                    {q: '证书的过期时间是如何计算的？', a: '过期时间取决于某设备下载时，所绑定的证书时限。通常为12个月，误差小于一周。'},
                    {q: '超级签名的APP可以到我们自己的网站上分发吗？', a: '可以的，我们支持网页、原生APP的SDK集成，方便快捷。'},
                ]
            }
        }
    }
}
</script>

<style lang="less">
.super{
    .banner{
        &{background-image: url('../assets/image/super/banner.png');}
        p{color: #fff;font-size: 16px;text-align: center;}
        .banner-txt-1{font-size: 64px;font-weight: bolder;padding-top: 200px;}
        .banner-txt-2{margin-top: 50px;}
    }

    .super-two{
        .function-title{margin: 87px auto;}
        .skin{
            &{width: 100%;max-width: 1200px;margin: -80px auto 100px;}
            p{width: 600px;text-align: center;}
            img{width: 300px;}
        }
        .title-label{font-size: 24px;font-weight: bold;color: #000;margin: -40px 0 10px;}
        .label{color: #999;font-size: 14px;}
    }

    .super-flow{
        .cf-icon{width: 95px;}
    }
}
</style>>