import express from 'express'
import bodyParser from 'body-parser';
import routesCharacters from "./routes/Characters"
import routesMovies from "./routes/Movies"
import routesAuth from "./routes/Auth"
const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/characters",routesCharacters)
app.use("/movies",routesMovies)
app.use("/auth",routesAuth)

export default app