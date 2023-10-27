import express from "express";
import authRoutes from "./entities/auth/authRoutes";

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000;

// routes
app.get('/', (__req, res)=> res.json('Healthcheck: ok'))
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
