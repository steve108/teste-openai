import prismaClient from "../prisma";

interface RegisterCustomerProps{
    nome: string;
    email: string;
    telefone: string
}

class RegisterCustomerService{
    async execute( {nome, email, telefone}: RegisterCustomerProps){
        
        if (!nome || !email || !telefone){
            throw new Error("Preencha os campos nome, email e telefone")
        }

        const { default: validator } = require('validator'); 

        if (!validator.isAlpha(nome) || nome.length < 5) {
            throw new Error("Nome inválido")
        }

        if (!validator.isEmail(email)) {
            throw new Error("E-mail inválido!")
        }

        // if (!validator.isMobilePhone(telefone)) {
        //     throw new Error("Formato inválido de telefone!")
        // }

        var regex = new RegExp(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);
        if (!regex.test(telefone)) { 
            throw new Error("Formato inválido de telefone!")
        }

        const cliente = await prismaClient.cliente.create({
            data:{
                nome,
                email,
                telefone
            }
        })

        return { ok: true}
    }
}

export { RegisterCustomerService}