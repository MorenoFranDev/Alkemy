import { Router } from 'express'
import { deleteCharacters, getCharacters, postCharacters, putCharacters } from '../controllers/CharacterController';
import { authentication } from '../helpers/authenticate';
const router = Router();

router.get("/", getCharacters) //FIND or GET
router.post("/", authentication, postCharacters) //SEND
router.put("/:id", authentication, putCharacters) //EDIT 
router.delete("/:id", authentication, deleteCharacters) //DELET

export default router