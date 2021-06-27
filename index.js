const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('启动成功！！！！！');
})


// ------------------------------------------------------注册接口-------------------------------------------------------------------
app.use(express.urlencoded({
    extended: true
}))

let login = require('./routers/login')
app.use('/api', login)