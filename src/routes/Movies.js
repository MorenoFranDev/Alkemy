import { Router } from 'express'
import { deleteMovies, getMovies,postMovies, putMovies } from '../controllers/MoviesController';
const router = Router();

router.get("/",getMovies) //FIND or GET
router.post("/",postMovies) //SEND
router.put("/:id",putMovies) //EDIT 
router.delete("/:id",deleteMovies) //DELET

export default router