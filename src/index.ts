import app from "./app"
import deletarCaractere from "./endpoints/deletarCaractere"
import deletarMovies from "./endpoints/deletarMovies"

//import { characters, movies } from "./data"
import getAllCaracters from "./endpoints/getAllCaracters"
import getAllMovies from "./endpoints/getAllMovies"
import criarCaracteres from "./endpoints/criarCaracteres"

app.get("/caracteres", getAllCaracters)
app.put("/caracter", criarCaracteres)
app.delete("/character/id", deletarCaractere)

app.get("/movies", getAllMovies )
app.delete("/movies/id", deletarMovies)






