"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCustomerService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class RegisterCustomerService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, email, telefone }) {
            if (!nome || !email || !telefone) {
                throw new Error("Preencha os campos nome, email e telefone");
            }
            const { default: validator } = require('validator');
            if (!validator.isAlpha(nome) || nome.length < 5) {
                throw new Error("Nome inválido");
            }
            if (!validator.isEmail(email)) {
                throw new Error("E-mail inválido!");
            }
            // if (!validator.isMobilePhone(telefone)) {
            //     throw new Error("Formato inválido de telefone!")
            // }
            var regex = new RegExp(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/);
            if (!regex.test(telefone)) {
                throw new Error("Formato inválido de telefone!");
            }
            const cliente = yield prisma_1.default.cliente.create({
                data: {
                    nome,
                    email,
                    telefone
                }
            });
            return { cliente };
        });
    }
}
exports.RegisterCustomerService = RegisterCustomerService;
