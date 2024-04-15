import { FastifyRequest, FastifyReply } from "fastify";
import { OpenAiService } from "../services/OpenAIService";

class OpenAIController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id_user, pergunta } =request.body as { id_user: string, pergunta: string}
        // console.log(id_user);
        // console.log(pergunta);

        const openaiService = new OpenAiService()

        const aswer = await openaiService.execute( {id_user, pergunta});

        reply.send(aswer)
    }
}

export { OpenAIController };