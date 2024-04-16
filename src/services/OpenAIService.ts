import prismaClient from "../prisma";
import OpenAI from "openai";

interface OpenAIProps{
    id_user: string;
    pergunta: string
    tokens: number
}

class OpenAiService{
    async execute( {id_user, pergunta, tokens}: OpenAIProps){
        
        if ( !id_user ){
          throw new Error("Preencha o id do usuário(id_user)")
        }

        if ( !pergunta ){
            throw new Error("Preencha o campo pergunta")
        }

        if ( !tokens ){
          tokens = 200
        }

        const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

        async function main() {
              const completion = await openai.completions.create({
              model: "gpt-3.5-turbo-instruct",
              prompt: pergunta,
              max_tokens: tokens,
              temperature: 0,
            });

            return completion.choices[0].text
          }
          const resposta = await main();

  
        const cliente = await prismaClient.cliente.update({
            where: {
                id: id_user,
              },
              data: {
                query: [pergunta, resposta ],
              },
        })

        return {pergunta, resposta }
    }
}

export { OpenAiService }