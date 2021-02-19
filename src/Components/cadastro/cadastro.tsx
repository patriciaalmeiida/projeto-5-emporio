import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setCadastro } from '../../store/ducks/cadastro/actions'



const Cadastro = () => {

    const dispatch = useDispatch()

    const { name, password, email, age } = useSelector((state: any) => state.user)

    useEffect(() => {
        axios.get('http://localhost:4000/register')
            .then(resposta => dispatch(setCadastro(resposta.data)))
    }, [dispatch])


    return 
}
export default Cadastro;