"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*import chalk from 'chalk'
let message = chalk.redBright("Boa Noite: Fagner Fontes Batista")
console.log(message);*/
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("teste", (req, res) => {
    res.status(200).send("Servidor funcionado!!!");
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
//# sourceMappingURL=index.js.map