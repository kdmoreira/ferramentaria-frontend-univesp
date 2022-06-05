import { Guid } from "guid-typescript";

export interface EmprestimoRead {
    id: Guid,
    codigo: string,
    ferramenta: string,
    colaboradorMatricula: string,
    dataEmprestimo: string,
    dataDevolucao: string,
    status: string
}

export interface EmprestimoListagem {
    data: EmprestimoRead[],
    count: number
}