import express from 'express'
import bodyParser from 'body-parser';
import routesCharacters from "./routes/Characters"
import routesMovies from "./routes/Movies"
const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/characters",routesCharacters)
app.use("/movies",routesMovies)

export default app