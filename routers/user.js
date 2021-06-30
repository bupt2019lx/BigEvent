const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router;
router.get('/userinfo', (req, res) => {
    db(`select * from user where id = '${req.user.id}'`, (err, result) => {
        if (err) throw err
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: result
        })
    })
})

//------------------------------------更换头像-----------------------------------
router.post('/avatar', (req, res) => {
    db(`update user set user_pic='${req.body.avatar}' where id=${req.user.id}`, (err, result) => {
        if (err) throw err
        res.send('55555555555555555')
    })

})
module.exports = router;