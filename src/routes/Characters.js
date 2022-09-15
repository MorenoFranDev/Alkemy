import { Router } from 'express'
import { deleteCharacters, getCharacters,postCharacters, putCharacters } from '../controllers/CharacterController';
const router = Router();

router.get("/",getCharacters) //FIND or GET
router.post("/",postCharacters) //SEND
router.put("/:id",putCharacters) //EDIT 
router.delete("/:id",deleteCharacters) //DELET

export default router