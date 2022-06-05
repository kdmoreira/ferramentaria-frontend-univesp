import { Guid } from "guid-typescript";
import { PerfilEnum } from "../perfil-enum.model";
import { Perfil } from "../perfil.model";
import { RoleEnum } from "../role-enum.model";
import { Role } from "../role.model";

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
    supervisorID?: Guid
}

export interface ColaboradorCreateUI extends ColaboradorCreate {
    perfil: Perfil,
    role: Role
}

export interface ColaboradorCreateRequest extends ColaboradorCreate {
    perfil: PerfilEnum,
    role: RoleEnum
}