import express from 'express';

const router = express.Router()

router.get('/admin/product', (req, res)=>{
    console.log('App use 1. üzenet')
    res.send(`<form action="/admin" method="POST">
        <input type="text" name="userName">
        <button type="submit">Send</button>`)
})

router.get('/admin', (req, res)=>{
    console.log('App use 1. üzenet')
    res.send(`Admin oldal`)
})

export default router;