<template>
    <div class="about">
        <section class="banner">
            <div class="banner-inner flex-middle">
                <img :src="require('@src/assets/image/about/document-icon.png')">
                <p>关于我们</p>
            </div>
        </section>

        <section class="about-main flex-column-middle">
            <h1 class="title">公司介绍</h1>
            <p class="label">本公司为用户提供iOS APP、Android APP的开发、打包、封装、测试等服务，着力于降低开发和部署的成本，提升开发效率，提高生产力。</p>
            <p class="label">秉承着“让开发更高效、更简单”的使命，将一系列的效率工具协同集成，免除繁杂的开发环境部署，</p>
            <p class="label">降低开发和部署成本，提升开发者开发效率，提高开发生产力。</p>
            <h1 class="title">联系我们</h1>
            <img :src="require('@src/assets/image/about/about.png')">
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.about{
    .banner{
        &{width: 100%;height: 220px;background-color: #536bf5;position: relative;}
        .banner-inner{width: 100%;max-width: 1200px;margin: 0 auto;padding-top: 120px;}
        img{width: 76px;height: 84px;}
        p{font-size: 36px;color: #fff;margin-left: 39px;}
    }

    .about-main{
        &{width: 100%;padding-bottom: 60px;color: #333;text-align: center;}
        .title{margin: 50px auto;font-size: 2em;}
        .label{font-size: 18px;line-height: 1.8;}
        img{width: 100%;max-width: 1200px;height: 397px;margin: 0 auto;}
    }
}

</style>