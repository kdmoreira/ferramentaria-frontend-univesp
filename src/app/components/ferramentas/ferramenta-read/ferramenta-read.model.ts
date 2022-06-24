import { Guid } from "guid-typescript";

export interface FerramentaRead {
    id: Guid,
    codigo: string,
    descricao: string,
    status: string
}

export interface FerramentaListagem {
    data: FerramentaRead[],
    count: number
}