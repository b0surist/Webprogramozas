import express from 'express';

const router = express.Router()

router.get('/product', (req, res)=>{
    console.log('App use 1. üzenet')
    res.send(`Termékek listája`)
})

export default router;