import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"; 
import { request } from "http";
import { RegisterCustomerController } from './controllers/RegisterCustomerController'
import { OpenAIController } from "./controllers/OpenAIController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions){

    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/cliente", async(request: FastifyRequest, reply: FastifyReply) => {
        return new RegisterCustomerController().handle(request, reply)
    })

    fastify.post("/openai", async(request: FastifyRequest, reply: FastifyReply) => {
        return new OpenAIController().handle(request, reply)
    })
}