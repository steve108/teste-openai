import prismaClient from "../prisma";
import OpenAI from "openai";

interface OpenAIProps{
    id_user: string;
    pergunta: string
}

class OpenAiService{
    async execute( {id_user, pergunta}: OpenAIProps){
        
        if ( !pergunta ){
            throw new Error("Preencha o campos pergunta")
        }

        const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

        async function main() {
              const completion = await openai.completions.create({
              model: "gpt-3.5-turbo-instruct",
              prompt: pergunta,
              max_tokens: 5,
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