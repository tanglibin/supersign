<template>
    <div class="home">
        <section class="banner">
            <div class="banner-inner flex-center">
                <div class="text-block">
                    <p class="text-one">超级签名一次 安装永不受影响</p>
                    <p class="text-two">iOS APP超级签名</p>
                    <p class="text-three">国内ios应用商店，申请账号、上传应用费时费力？</p>
                    <p class="text-four">不一样的ios签名。让你告别掉签烦恼，提高您的应用分发效率，节省大量时间，帮您轻松节省大量获客成本</p>
                </div>
            </div>
        </section>


        <section class="advantage">
            <div class="title-block flex-middle-center-column">
                <p class="big">我们的优势</p>
                <p class="small">自研发的超级签名技术，为您的苹果应用保驾护航</p>
            </div>
            <div class="advantage-conx flex-center">
                <div class="advantage-item flex">
                    <div class="adinner flex-column-middle-center">
                        <img class="adimg-one" :src="require('@src/assets/image/home/ad-1.png')">
                        <p class="adlabel-1">自动化签名 方便快捷</p>
                        <p class="adlabel-2">根据自身需要，选择服务类型，上传IPA包，快速分发,10分钟内完成所有流程，全程自动化，操作简单</p>
                    </div>
                </div>
                <div class="advantage-item flex">
                    <div class="adinner flex-column-middle-center">
                        <img class="adimg-two" :src="require('@src/assets/image/home/ad-2.png')">
                        <p class="adlabel-1">特有机制 告别掉签</p>
                        <p class="adlabel-2">我们采取的iOS超级签名和企业签名机制不同，掉签概率远低于传统企业签名&nbsp;</p>
                    </div>
                </div>
                <div class="advantage-item flex">
                    <div class="adinner flex-column-middle-center">
                        <img class="adimg-three" :src="require('@src/assets/image/home/ad-3.png')">
                        <p class="adlabel-1">无需越狱 安装即用</p>
                        <p class="adlabel-2">无需企业签名，无需越狱，无需苹果审核，无需上架App Store，下载后安装即用</p>
                    </div>
                </div>
                <div class="advantage-item flex">
                    <div class="adinner flex-column-middle-center">
                        <img class="adimg-four" :src="require('@src/assets/image/home/ad-4.png')">
                        <p class="adlabel-1">按需购买 性价比高</p>
                        <p class="adlabel-2">按需购买，未使用设备不过期同设备多次下载，或下载多款应用下载，只收费一次</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="lowprize">
            <div class="title-block flex-middle-center-column">
                <p class="big">超低价格</p>
                <p class="small">同样的iOS签名、超低的价格</p>
            </div>
            <div class="lowprize-conx flex-center">
                <div class="lowprize-inner flex-middle-between">
                    <img class="lowimg-one" :src="require('@src/assets/image/home/hpchahua.png')">
                    <div class="text-skin">
                        <p class="lowprize-txt-1">同样的iOS签名、超低的价格 </p>
                        <p>1、因机制与企业签名不同，告别掉签</p>
                        <p>2、告别掉签风险，只需支付一次获客成本即可</p>
                        <p>3、同一台设备下载安装该应用不限制下载次数</p>
                    </div>
                </div>
            </div>
            <img class="lowimg-two" :src="require('@src/assets/image/home/right.png')">
        </section>


        <section class="service">
            <div class="title-block flex-middle-center-column">
                <p class="big">服务对比</p>
                <p class="small">超级签名与企业签名服务对比</p>
            </div>
            <div class="service-conx flex-center">
                <img class="service-one" :src="require('@src/assets/image/home/hpfuwuduibi.png')">
            </div>
            <img class="service-two" :src="require('@src/assets/image/home/left.png')">
        </section>


        <section class="question">
            <div class="title-block flex-middle-center-column">
                <p class="big">常见问题</p>
                <p class="small">使用超级签名经常遇到的一些问题</p>
            </div>
            <div class="question-conx flex-center">
                <div class="question-inner">
                    <div class="qa-item" v-for="(item, index) in questionList" :key="index">
                        <div class="flex-middle qa-block is-q">
                            <p class="dot">Q</p>
                            <p class="contx">{{item.q}}</p>
                        </div>
                        <div class="flex-middle qa-block is-a">
                            <p class="dot">A</p>
                            <p class="contx">{{item.a}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {
            questionList: [
                {q: '需要提供 App 的源码吗?', a: '不需要提供，仅需要提供adhoc版本的ipa格式的安装包即可。'},
                {q: '对安装包的大小是否有限制？', a: '应用包大小最高不超过2048M。'},
                {q: '付款方式有哪些？', a: '支持支付宝、微信支付。'},
                {q: '签名需要多长时间？', a: '上传IPA安装包后开始签名，一般来说5分钟内完成签名。'},
                {q: '充值后如何上传IPA安装包？', a: '进入后台系统“应用管理”页面，点击“新增应用”，按流程进行操作即可上传成功。若未登录，可点击页面中“登录”或banner中“立即签名”进入后台登录页面， 输入账号密码登录后再进行上传。'},
                {q: '签名的 App 可以在商店搜索到吗?', a: '不能，超级签名后的 App 可以直接将链接发给用户安装，无需越狱，无需账号，无需审核。'},
                {q: '如果同一台设备安装应用后卸载，再重新安装，计费时算一台设备还是两台？', a: '按照真实设备数量计算，只计算一台设备。'}
            ]
        }
    }
}
</script>

<style lang="less">
.home{
    .banner{background-image: url('../assets/image/home/banner.png');height: 43vw;}
    .banner-inner{width: 100%;position: absolute;top: 13vw;}
    .text-block{width: 62%;height: 400px;margin: 0 auto;color: #000;}
    .text-one{font-size: 1.8vw;width: 44vw;letter-spacing: 7px;}
    .text-two{font-size: 3vw;width: 44vw;font-weight: 700;}
    .text-three{font-size: 1vw;margin-top: 28px;width: auto;}
    .text-four{font-size: 1vw;line-height: 1.8vw;margin-top: 5px;width: 36vw;}

    .title-block{
        &{margin-top: 60px;width: 100%;}
        .big{font-size: 30px;font-weight: 700;color: #333;}
        .small{font-size: 16px;color: #848c99;margin-top: 10px;}
    }
        
    .pblic-1(){
        width: 100%;height: auto;background-color: #fff;
    }
    .advantage{
        &{.pblic-1();font-family: Microsoft YaHei;}
        .advantage-conx{width: 100%;max-width: 1200px;min-width: 600px;margin: 30px auto 0;}
        .advantage-item{width: 100%;max-width: 280px;min-width: 200px;height: 300px;background-size: 280px 300px;margin: 20px 25px 0 5px;border-radius: 10px;background-repeat: no-repeat;font-size: 16px;box-shadow: 0 0 20px 0 rgba(220, 217, 217, 50%);}
        .adinner{margin: auto;}
        .adlabel-1{margin-top: 45px;font-size: 18px;font-weight: 700;}
        .adlabel-2{width: 100%;max-width: 239px;min-width: 194px;font-size: 14px;font-weight: 400;text-align: justify;color: #848c99;margin-top: 20px;}
        .adimg-one{width: 59px;height: 58px;}
        .adimg-two{width: 49px;height: 61px;}
        .adimg-three{width: 56px;height: 56px;}
        .adimg-four{width: 60px;height: 60px;}
    }

    .lowprize{
        &{.pblic-1();position: relative;}
        .lowprize-conx{width: 100%;margin-top: 30px;}
        .lowprize-inner{width: 100%;max-width: 1200px;height: auto;}
        .lowimg-one{width: 625px;height: 481px;}
        .text-skin{
            &{width: 500px;}
            p{color: #848c99;font-size: 16px;margin-top: 20px;}
            .lowprize-txt-1{color: #333;font-size: 28px;margin: 0;}
        }
        .lowimg-two{position: absolute;top: 0;width: 310.4px;height: 1232px;}
    }

    .service{
        &{.pblic-1();position: relative;}
        .service-conx{width: 100%;margin-top: 30px;}
        .service-one{width: 799px;height: 502px;}
        .service-two{width: 322.4px;height: 1232px;position: absolute;top: 20%;right: 0;}
    }

    .question{
        &{.pblic-1();}
        .question-conx{width: 100%;margin-top: 50px;}
        .question-inner{width: 100%;max-width: 1200px;margin-bottom: 60px;}
        .qa-item{margin-top: 26px;}
        .qa-block{margin-top: 12px;}
        .dot{width: 20px;height: 20px;color: #fff;border-radius: 2px;text-align: center;line-height: 20px;background-color: #ffa405;}
        .contx{margin-left: 10px;color: #333;font-size: 15px;}
        .is-q{
            .dot{background-color: #ff355b;}
            .contx{font-weight: 700;}
        }
    }
}
</style>>