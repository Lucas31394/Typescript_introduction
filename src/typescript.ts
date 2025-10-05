import { TipoTransacao } from "./types/TipoTransacao";

// Primitive types
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";

// Arrays
const list: number[] = [];
list.push(13, 22.5, 123, 89, 1.58);

// Type Alias
type Transacao = {
    tipoTransacao: string,
    data: Date,
    valor: number
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}