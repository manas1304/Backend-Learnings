import express from 'express';
const app = express();
const PORT = 5151;
app.use(express.json()); // Convert the data to JS object so that Node.js can understand this.

import ideaRoutes from './routers/ideas.routes.js'
app.use("/idea_app/v1", ideaRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on the port number ${PORT}`)
})