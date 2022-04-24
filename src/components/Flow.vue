<template>
    <section class="common-flow">
        <img v-if="hasBg" class="flow-bg" :src="require(`@src/assets/image/${catalogue}/flow-bg.png`)">
        <div class="title flex-center-middle">
            <img class="flow-title" :src="require(`@src/assets/image/${catalogue}/flow-title.png`)">
        </div>
        <div class="flow-main flex-middle-around" ref="flmain">
            <div class="cf-item flex-column-middle" v-for="(item, index) in list" :key="index">
                <img class="cf-icon" :src="require(`@src/assets/image/${catalogue}/icon-${index+1}.png`)">
                <p class="cf-label">{{item}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Flow',
    props: {
        list: {//数据集
            type: Array,
            default(){
                return [];
            }
        },
        catalogue: { //图片目录文件夹名称
            type: String,
            default: ''
        },
        hasBg: { //是否有背景图片
            type: Boolean,
            default: true
        }
    },
    mounted(){
        this.$nextTick( () => {
            let allChild = Array.from( this.$refs.flmain.children );
            allChild.pop();
            allChild.forEach(element => {
                let span = document.createElement('span');
                span.innerText = '>';
                span.className = 'gt';
                element.parentNode.insertBefore(span, element.nextElementSibling);
            });
        })
    }
}
</script>

<style lang="less">
.common-flow{
    &{width: 100%;height: 520px;background-size: 100% 100%;background-repeat: no-repeat;background-position: 100% 100%;position: relative;}
    .flow-bg{width: 106%;height: 520px;position: absolute;top: 0;right: .01%;z-index: -1;}
    .title{width: 683px;height: 91px;margin: 0 auto 76px;padding-top: 135px;}
    .flow-title{width: 683px;height: 91px;}

    .flow-main{width: 100%;max-width: 1200px;margin: 120px auto 0;}
    .cf-label{text-align: center;font-size: 24px;font-weight: bolder;margin-top: 36px;color: #fff;}
    .gt{font-size: 80px;font-weight: bolder;color: #fff;}
}
</style>