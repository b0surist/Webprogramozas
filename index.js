import express from 'express'
import userRoutes from './routes/admin.js'
import userRoute from './routes/product.js'

const app = express()
const PORT = 3000

app.use('/', userRoutes)
app.use('/', userRoute)

app.listen(PORT, () => console.log(`Fut a szerver a http://localhost:${PORT} porton`))
