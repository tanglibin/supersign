<template>
    <div class="distribute">
        <section class="banner">
            <p class="banner-txt-1">分发托管</p>
            <p class="banner-txt-2">一键上传 iOS 或 Android 应用至本平台扫描二维码下载安装</p>
            <p class="banner-txt-3">实名用户每天免费赠送下载点数</p>
        </section>


        <section class="func">
            <img class="function-title" :src="require('@src/assets/image/common/function-title.png')">
            <div class="skin flex-around-wrap">
                <div class="func-item flex-middle-column fi-1">
                    <p class="label-1">一键上传应用</p>
                    <p class="label-2">上传你的iOS和Android应用</p>
                    <p class="label-3">生成下载链接和二维码，即可分享应用给他人</p>
                </div>
                <div class="func-item flex-middle-column fi-2">
                    <p class="label-1">二维码合并</p>
                    <p class="label-2">可将iOS和Android的下载二维码合并</p>
                    <p class="label-3">合并后自动识别当前设备跳转到对应的下载页</p>
                </div>
                <div class="func-item flex-middle-column fi-3">
                    <p class="label-1">支持上传大文件</p>
                    <p class="label-2">大文件也可轻松上传</p>
                    <p class="label-3">支持1GB大小的应用安装包</p>
                </div>
                <div class="func-item flex-middle-column fi-4">
                    <p class="label-1">阿里云高速CDN下载通道</p>
                    <p class="label-2">至本平台应用托管在阿里云OSS</p>
                    <p class="label-3">保证在全国各地都能享受流畅无阻的下载体验</p>
                </div>
            </div>
        </section>

        <flow class="distribute-flow" :list="flow" catalogue="distribute" />

        <qa :datas="qa"/>
    </div>
</template>

<script>
import Flow from '@components/Flow'
import Qa from '@components/Qa'
export default {
    name: 'Distribute',
    components: {
        Flow,
        Qa
    },
    data(){
        return {
            flow: ['提交网页链接', '等待封装完成', '分发应用'],

            qa: {
                left: [
                    {q: '我要怎样才能享受每天下载点数？', a: '实名认证后，每天都享有100点免费下载点数以供使用。'},
                    {q: '任何应用都可以在平台分发吗？', a: '违规产品禁止在本平台分发，一经发现将下架处理，告知后依然屡次发布将冻结账号处理，具体请参阅网站上传的审核规则说明。'},
                ],
                right: [
                    {q: '发布的APP会过期吗？', a: '本平台的应用将保存，我们不会对其应用进行删除。'},
                    {q: '支持国外下载吗？', a: '支持国外下载，全网加速。'},
                ]
            }
        }
    }
}
</script>

<style lang="less">
.distribute{
    .banner{
        &{background-image: url('../assets/image/distribute/banner.png');}
        p{color: #fff;text-align: center;font-size: 16px;}
        .banner-txt-1{font-size: 64px;font-weight: bolder;padding-top: 200px;}
        .banner-txt-2{margin-top: 50px;}
    }

    .func{
        &{padding: 87px 0 80px;}
        .skin{width: 100%;max-width: 1200px;margin: 60px auto 0;color: #fff;}
        .func-item{width: 572px;height: 352px;background-repeat: no-repeat;background-size: 100% 100%;margin-bottom: 30px;}
        .label-1{font-size: 24px;font-weight: bolder;margin: 200px 0 20px;}
        .label-2, .label-3{font-size: 14px;}
        .label-3{margin-top: 8px;}
        .fi-1{background-image: url('../assets/image/distribute/function-1.png');}
        .fi-2{background-image: url('../assets/image/distribute/function-2.png');}
        .fi-3{background-image: url('../assets/image/distribute/function-3.png');}
        .fi-4{background-image: url('../assets/image/distribute/function-4.png');}
    }

    .distribute-flow{
        .cf-icon{width: 110px;}
        .cf-label, .gt{color: #000;}
    }
}
</style>>