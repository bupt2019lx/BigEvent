const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('启动成功！！！！！');
})
const db = require('./db')
const md5 = require('md5');
app.use(express.urlencoded({
    extended: true
}))
app.post('/api/reguser', (req, res) => {
    let {
        username,
        password
    } = req.body;
    password = md5(password);
    db(`select * from user where username ='${username}'`, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                status: 1,
                message: '用户名重复'
            })
        } else {
            db(`insert into user set username='${username}',password='${password}'`, (err, result) => {
                res.send({
                    status: 0,
                    message: '注册成功'
                })
            })
        }
    })


})