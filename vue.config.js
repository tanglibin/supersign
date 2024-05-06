const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
 
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@src',resolve('./src/'))
            .set('@view',resolve('./src/views/'))
            .set('@components',resolve('./src/components/'));

    }
}