import express from 'express';
const route = express.Router();
import getAllIdeas, {getIdeaById, newIdea, updateIdea, deletIdea} from '../controllers/ideas.controllers.js'


route.get("/ideas", getAllIdeas);
route.get(`/ideas/:id`, getIdeaById);
route.post("/ideas", newIdea)
route.put("/ideas/:id", updateIdea);
route.delete("/ideas/:id", deletIdea);

export default route;   