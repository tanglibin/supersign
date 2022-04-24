<template>
  <section class="common-qa">
        <div class="qa-title flex-center-middle">
            <img class="qa-img" :src="require('@src/assets/image/common/question-title.png')">
        </div>
        <div class="qa-wrap flex-around">
            <div class="qa-skin" ref="left">
                <div class="qa-item" v-for="(item, index) in datas.left" :key="index">
                    <p class="text-q">Q：{{item.q}}</p>
                    <p class="text-a">A：{{item.a}}</p>
                </div>
            </div>
            <div class="qa-skin" ref="right">
                <div class="qa-item" v-for="(item, index) in datas.right" :key="index">
                    <p class="text-q">Q：{{item.q}}</p>
                    <p class="text-a">A：{{item.a}}</p>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
    name: 'Qa',
    props: {
        datas: {
            type: Object,
            default(){
                return {
                    left: [],
                    right: []
                };
            }
        }
    },
    mounted(){
        this.$nextTick(() => {
            let childLeft = this.$refs.left.children;
            let childRight = this.$refs.right.children;
            let {left, right} = this.datas;
            let min = Math.min(left.length, right.length);
            let index = 0;
            while(index < min){
                let leftEl = childLeft[index];
                let rightEl = childRight[index];
                let height = Math.max(leftEl.clientHeight, rightEl.clientHeight);

                leftEl.style.height = height + 'px';
                rightEl.style.height = height + 'px';
                
                index ++;
            }
        })
    }
}
</script>

<style lang="less">
.common-qa{
    &{width: 100%;height: 1240px;background-repeat: no-repeat;background-size: 100% 100%;background-image: url('../assets/image/common/question-bg.png');}
    .qa-title{width: 604px;height: 91px;margin: 0 auto;padding-top: 150px;}
    .qa-img{width: 604px;height: 91px}

    .qa-wrap{width: 100%;max-width: 1200px;margin: 0 auto;}
    .qa-skin{margin-top: 105px;}
    .text-q{width: 480px;font-size: 24px;margin-bottom: 20px;margin-top: 60px;}
    .text-a{width: 480px;color: #ff9842;font-size: 18px;padding-left: 10px;}
}
</style>>