<template>
    <div class="shelf">
        <section class="banner">
            <p class="banner-txt-1">APP上架</p>
            <p class="banner-txt-2">快速上架，专业上架团队，熟悉App Store审核规则，提供上架前免费预审</p>
            <p class="banner-txt-3">提高上架成功率，解决APP过审被拒问题，保障上架完成</p>
        </section>


        <section class="shelf-main">
            <img class="shelf-main-title" :src="require('@src/assets/image/shelf/function-title.png')">
            <div class="skin">
                <div class="ad-item flex-column-middle">
                    <img class="adimg" :src="require('@src/assets/image/shelf/ad-1.png')">
                    <p class="label">专业上架团队，熟悉App Store审核规则</p>
                </div>
                <div class="ad-item flex-column-middle">
                    <img class="adimg" :src="require('@src/assets/image/shelf/ad-2.png')">
                    <p class="label">提供上架前免费预审，提供上架成功率</p>
                </div>
                <div class="ad-item flex-column-middle">
                    <img class="adimg" :src="require('@src/assets/image/shelf/ad-3.png')">
                    <p class="label">解决APP过审被拒问题，保障上架成功</p>
                </div>
                <div class="ad-item flex-column-middle">
                    <img class="adimg" :src="require('@src/assets/image/shelf/ad-4.png')">
                    <p class="label">上架不成功，全额退费保证</p>
                </div>
                <flow class="shelf-flow" :list="flow" catalogue="shelf" :has-bg="false"/>
            </div>
        </section>
        
    </div>
</template>

<script>
import Flow from '@components/Flow'
export default {
    name: 'Shelf',
    components: {
        Flow,
    },
    data(){
        return {
            flow: ['在线咨询', '提交信息', '信息审核', '完成上架'],
        }
    }
}
</script>

<style lang="less">
.shelf{
    .banner{
        &{background-image: url('../assets/image/shelf/banner.png');}
        p{width: 100%;max-width: 1200px;color: #fff;font-size: 16px;margin: 0 auto;text-align: right;}
        .banner-txt-1{font-size: 64px;font-weight: bolder;padding-top: 200px;}
        .banner-txt-2{margin: 50px auto 0;}
    }

    .shelf-main{
        &{width: 100%;height: 1727px;background-size: 100% 100%;background-repeat: no-repeat;padding-top: 87px;background-image: url('../assets/image/shelf/bg.png');}
        .shelf-main-title{display: block;width: 795px;height: 91px;margin: 0 auto;}
        .skin{margin-top: 60px;}
        .ad-item{margin-top: 35px;}
        .adimg{width: 150px;height: 150px;}
        .label{font-size: 24px;font-weight: bolder;color: #333;margin-top: 15px;}
    }

    .shelf-flow{
        .flow-title{width: 407px;}
        .cf-icon{width: 95px;}
        .cf-label{color: #000;}
        .gt{color: #999;}
    }
}
</style>>