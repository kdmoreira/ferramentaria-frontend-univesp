import { Guid } from "guid-typescript"

export interface FerramentaCreate {
    id?: Guid,
    codigo: string
    descricao: string
    quantidadeTotal: number
    valorCompra: number
    localizacao: string
    numeroPatrimonial: string
    fabricante: string
    categoriaID?: string
  }