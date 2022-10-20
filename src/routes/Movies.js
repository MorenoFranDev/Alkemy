import { Router } from 'express'
import { deleteMovies, getMovies,postMovies, putMovies } from '../controllers/MoviesController';
import { authentication } from '../helpers/authenticate';
const router = Router();

router.get("/",getMovies) //FIND or GET
router.post("/",authentication,postMovies) //SEND
router.put("/:id",authentication,putMovies) //EDIT 
router.delete("/:id",authentication,deleteMovies) //DELET

export default router