import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterCustomerService } from "../services/RegisterCustomerService";

class RegisterCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome, email, telefone } =request.body as { nome: string, email: string, telefone: string}
        // console.log(nome);
        // console.log(email);

        const customerService = new RegisterCustomerService()

        const cliente = await customerService.execute( {nome, email, telefone});

        reply.send(cliente)
    }
}

export { RegisterCustomerController };