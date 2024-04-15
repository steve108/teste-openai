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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterCustomerController = void 0;
const RegisterCustomerService_1 = require("../services/RegisterCustomerService");
class RegisterCustomerController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, telefone } = request.body;
            // console.log(nome);
            // console.log(email);
            const customerService = new RegisterCustomerService_1.RegisterCustomerService();
            const cliente = yield customerService.execute({ nome, email, telefone });
            reply.send(cliente);
        });
    }
}
exports.RegisterCustomerController = RegisterCustomerController;
