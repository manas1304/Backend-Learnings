import ideas from '../models/idea.model.js';
let id = 3; // initially last id number of the idea stored

/**
 * Controller to get all the ideas from idea.model.js
 */
export default function getAllIdeas(req, res){
    res.status(200).send(ideas);
    console.log("Fetched all the Ideas successfully!")
}

/**
 * Fetch the ideas based on specific id
 */
export function getIdeaById(req, res){
    const ideaId = req.params.id;
    if(ideas[ideaId]){
        res.status(200).send(ideas[ideaId]);
    }else{
        console.log(`Idea with the id ${ideaId} is not present`);
        res.status(404).send({
            message: `Idea with the id ${ideaId} is not present`
        })
    }
}

/**Controller to post a new idea */
export function newIdea(req, res){
    id++;

    let ideaObject = req.body;
    ideaObject["id"] = id;
    ideas[id] = ideaObject;

    // Return the respone
    res.status(200).send(ideaObject.json());
}

/**
 * Controller to update the idea
 */

export function updateIdea(req, res){

    const ideaId = req.params.id;
    if(ideas[ideaId]){
        const ideaObject = req.body;
        ideas[ideaId] = ideaObject;
        res.status(202).send(ideaObject);
    }else{
        res.status(404).send({
            message:"Idea with the provided id doesn't exist"
        })
    }
}

/**
 * Controller to delete the idea
 */
export function deletIdea(req, res){
    const ideaId = req.params.id;

    if(ideas[ideaId]){
        delete ideas[ideaId];
        res.status(200).send({
            message: `Idea with the ${ideaId} has been deleted successfully`
        })
    }else{
         res.status(404).send({
            message:"Idea with the provided id doesn't exist"
        })
    }
}