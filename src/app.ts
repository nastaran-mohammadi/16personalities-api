import express from "express"
import cors from "cors"
import morgan from "morgan"
import routes from "./routes"
import { PORT } from "./config"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/api", routes)

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
