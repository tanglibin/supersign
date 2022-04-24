<template>
    <div class="encapsulation">
        <section class="banner">
            <p class="banner-txt-1">网页封装</p>
            <p class="banner-txt-2">只需一个网站地址即可创建属于您自己的移动APP</p>
            <p class="banner-txt-3">无需任何代码开发，纯原生生成，支持在线更新</p>
        </section>


        <section class="func">
            <img class="function-title" :src="require('@src/assets/image/common/function-title.png')">
            <div class="skin flex-around">
                <div class="flex-column-middle">
                    <img class="func-icon" :src="require('@src/assets/image/encapsulation/function-1.png')">
                    <p class="label-bold">自助拼装</p>
                    <p class="label">功能自助拼装，不花一分冤枉钱，更有诸多在线配置功能</p>
                    <p class="label">让您省去多次打包升级APP的烦恼</p>
                </div>
                <div class="flex-column-middle">
                    <img class="func-icon" :src="require('@src/assets/image/encapsulation/function-2.png')">
                    <p class="label-bold">高稳定性</p>
                    <p class="label">摆脱苹果企业分发闪退等问题，双端稳定使用</p>
                    <p class="label">适配各类机型，以获得流畅的使用体验</p>
                </div>
                <div class="flex-column-middle">
                    <img class="func-icon" :src="require('@src/assets/image/encapsulation/function-3.png')">
                    <p class="label-bold">原生代码</p>
                    <p class="label">多年行业技术纯手工封装，无后门，无广告，速度快，</p>
                    <p class="label">支持各类定制。</p>
                </div>
            </div>
        </section>

      
        <flow class="encapsulation-flow" :list="flow" catalogue="encapsulation" />

        <qa :datas="qa"/>
  </div>
</template>

<script>
import Flow from '@components/Flow'
import Qa from '@components/Qa'
export default {
    name: 'Encapsulation',
    components: {
        Flow,
        Qa
    },
    data(){
        return {
            flow: ['提交网页链接', '等待封装完成', '分发应用'],

            qa: {
                left: [
                    {q: '网页封装都需要提供什么材料呢？', a: '只需要提供APP名字、网页链接、APP图标，1分钟即可完成封装。'},
                    {q: '网页封装的好处？', a: '网页封装只需要一次，后期不会再次收取任何费用，长期使用，支持随时更换网页链接，也不会存在掉签的问题，稳定运行，适配双端。'},
                ],
                right: [
                    {q: '制作好的APP，可以直接安装吗？', a: '封装好即可直接安装。'},
                ]
            }
        }
    }
}
</script>

<style lang="less">
.encapsulation{
    .banner{
        &{background-image: url('../assets/image/encapsulation/banner.png');}
        p{width: 100%;max-width: 1200px;color: #fff;font-size: 16px;margin: 0 auto;}
        .banner-txt-1{font-size: 64px;font-weight: bolder;padding-top: 200px;}
        .banner-txt-2{margin: 50px auto 0;}
    }

    .func{
        &{padding: 87px 0 80px;}
        .skin{width: 100%;max-width: 1200px;margin: 0 auto;}
        .func-icon{width: 267px;height: 274px;}
        .label-bold{font-size: 24px;font-weight: bolder;color: #000;margin-bottom: 10px;}
        .label{color: #999;font-size: 14px;}
    }

    .encapsulation-flow{
        .cf-icon{width: 110px;}
    }
}
</style>>