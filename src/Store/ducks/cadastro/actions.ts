import { action } from 'typesafe-actions'
import Cadastro from '../../../Components/cadastro/cadastro'
import { UsuariosTypes, Usuario } from './types'

export const setCadastro = (payload: Cadastro) => action(UsuariosTypes.GET_CADASTRO, payload)