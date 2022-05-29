import { Guid } from "guid-typescript";
import { PerfilEnum } from "../perfil-enum.model";
import { RoleEnum } from "../role-enum.model";

export interface ColaboradorCreate {
    id?: Guid,
    cpf: string,
    matricula: string,
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string,
    cargo: string,
    empresa: string,
    supervisorID?: Guid,
    perfil: PerfilEnum,
    role: RoleEnum
}