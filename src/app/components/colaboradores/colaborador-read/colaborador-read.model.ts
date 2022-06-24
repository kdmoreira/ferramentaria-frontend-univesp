import { Guid } from "guid-typescript";

export interface ColaboradorRead {
    id: Guid,
    matricula: string,
    nomeCompleto: string,
    situacaoEmprestimo: string
}

export interface ColaboradorListagem {
    data: ColaboradorRead[],
    count: number
}