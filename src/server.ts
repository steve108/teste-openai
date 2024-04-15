import Fastify from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";

const app = Fastify({ logger:true})

const start =async () => {

    await app.register(cors);
    await app.register(routes);

    var port = process.env.PORT || 5000;

    try{
        await app.listen(port, "0.0.0.0", function() {
            console.log("Listening on Port 5000");
            })
    }catch(err){
        process.exit(1)
    }
    
}

start();