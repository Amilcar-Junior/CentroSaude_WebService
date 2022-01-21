import {

    CREATE_FUNCIONARIO,

    RETRIEVE_FUNCIONARIOS,

    UPDATE_FUNCIONARIO,

    DELETE_FUNCIONARIO,

} from "./actionTypes";

import { toast } from "react-toastify";
import FuncionariosService from "./funcionariosService";

export const createFuncionario =

    (bi, nome, morada, email, contacto, especialidade, cargo) => async (dispatch) => {

        try {

            const res = await FuncionariosService.create({

                bi, nome, morada, email, contacto, especialidade, cargo

            });

            
            dispatch({

                type: CREATE_FUNCIONARIO,

                payload: res.data,
                

            });

            toast.success('Funcionario adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Funcionario não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveFuncionarios = () => async (dispatch) => {

    try {

        const res = await FuncionariosService.getAll();

        dispatch({

            type: RETRIEVE_FUNCIONARIOS,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Funcionario não encontrado!');
        console.log(err);

    }

};

export const updateFuncionario = (id, data) => async (dispatch) => {

    try {

        const res = await FuncionariosService.update(id, data);

        dispatch({

            type: UPDATE_FUNCIONARIO,

            payload: res.data,

        });

        toast.success('Funcionario foi alterado com sucesso!')
        return Promise.resolve(res.data);

    } catch (err) {
        toast.error('Funcionario não foi alterado!')
        return Promise.reject(err);

    }

};

export const deleteFuncionario = (id) => async (dispatch) => {

    try {

        await FuncionariosService.delete(id);

        dispatch({

            type: DELETE_FUNCIONARIO,

            payload: { id },

        });

        toast.success('Funcionario Deletado com sucesso!')

    } catch (err) {

        toast.error('Funcionario não foi Deletado!')
        console.log(err);

    }

};