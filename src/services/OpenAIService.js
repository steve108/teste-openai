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
exports.OpenAiService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const openai_1 = __importDefault(require("openai"));
class OpenAiService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id_user, pergunta }) {
            if (!pergunta) {
                throw new Error("Preencha o campos pergunta");
            }
            const openai = new openai_1.default({ apiKey: process.env['OPENAI_API_KEY'] });
            function main() {
                return __awaiter(this, void 0, void 0, function* () {
                    const completion = yield openai.completions.create({
                        model: "gpt-3.5-turbo-instruct",
                        prompt: pergunta,
                        max_tokens: 5,
                        temperature: 0,
                    });
                    return completion.choices[0].text;
                });
            }
            const resposta = yield main();
            const cliente = yield prisma_1.default.cliente.update({
                where: {
                    id: id_user,
                },
                data: {
                    query: [pergunta, resposta],
                },
            });
            return { pergunta, resposta };
        });
    }
}
exports.OpenAiService = OpenAiService;
