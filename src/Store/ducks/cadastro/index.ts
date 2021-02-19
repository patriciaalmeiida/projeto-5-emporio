import { Cadastro, CadastroTypes } from './types'

const initialStateUsuarios: Cadastro = {
  name: '',
  email: '',
  password: '',
  age: ''
}

function reducerCadastro(state = initialStateCadastro, action: any) {
    switch(action.type) {

      case CadastroTypes.GET_CADASTRO:
        return {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          age: action.payload.age
        }

      default: 
        return state
    }
}

export default reducerCadastro