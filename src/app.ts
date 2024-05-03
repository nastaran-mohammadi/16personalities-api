import express, { Request, Response, NextFunction } from "express"
// import cors from "cors"
// import morgan from "morgan"
// import routes from "./routes"
// import { PORT } from "@/config"
// import { HttpError } from "./utils/httpError"

const app = express()
app.use(express.json());

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(morgan("dev"))

// app.use("/api", routes)

// app.use((err: HttpError, req: Request, res: Response) => {
//   res.status(err.status || 500).json({
//     message: err.message,
//   })
// })

app.get('/questions', (req, res) => {
  res.send('HELLO')
})

app.listen(3000, async () => {
  console.log(`Server running on port ${3000}`)
})

export default app
