const express = require('express');
const router = require('./routers/login');
const app = express();
app.listen(3000, () => {
    console.log('启动成功！！！！！');
})

app.use(express.urlencoded({
    extended: true
}))
const jwt = require('express-jwt')
// app.use(jwt().unless())
// jwt()用于解析token，并完成token中保存的数据 赋值给req.user
// unless()完成身份认证
app.use(jwt({
    secret: 'jiligulumamahaha', //生成token时的秘钥必须统一
    algorithms: ['HS256'] //必填 加密算法
}).unless({
    path: ['/api/login', '/api/reguser'] //除了这两个接口都需要认证
}));


let login = require('./routers/login')
app.use('/api', login)

app.use('/my/user', require('./routers/user'))

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        // res.status(401).send('invalid token...');
        res.status(401).send({
            status: 1,
            message: '身份认证失败！'
        });
    }
});