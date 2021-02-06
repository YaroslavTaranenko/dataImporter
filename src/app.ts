import Express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = Express();

const port = process.env.APPLICATION_PORT || 4000;

app.listen(port, ()=>{
    console.log(`Application listening port ${port}`);
})

