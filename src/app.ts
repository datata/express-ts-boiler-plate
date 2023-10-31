import express from "express";
import router from "./router";

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000;

// routes
app.get('/', (__req, res)=> res.json({
  success: true,
  message: 'Healthcheck: ok'
}))

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
