import {

    CREATE_SERVICO,

    RETRIEVE_SERVICOS,

    UPDATE_SERVICO,

    DELETE_SERVICO,

} from "./actionTypes";

import { toast } from "react-toastify";
import ServicosService from "./servicosService";

export const createServico =

    (descricao, custo, date, tipo, urgente, paciente, funcionario,) => async (dispatch) => {

        try {

            const res = await ServicosService.create({

                descricao, custo, date, tipo, urgente, paciente, funcionario,

            });


            dispatch({

                type: CREATE_SERVICO,

                payload: res.data,
                

            });

            toast.success('Servico adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Servico não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveServicos = () => async (dispatch) => {

    try {

        const res = await ServicosService.getAll();

        dispatch({

            type: RETRIEVE_SERVICOS,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Servico não encontrado!');
        console.log(err);

    }

};

export const updateServico = (id, data) => async (dispatch) => {

    try {

        const res = await ServicosService.update(id, data);

        dispatch({

            type: UPDATE_SERVICO,

            payload: res.data,

        });

        toast.success('Servico foi alterado com sucesso!')
        return Promise.resolve(res.data);

    } catch (err) {
        toast.error('Servico não foi alterado!')
        return Promise.reject(err);

    }

};

export const deleteServico = (id) => async (dispatch) => {

    try {

        await ServicosService.delete(id);

        dispatch({

            type: DELETE_SERVICO,

            payload: { id },

        });

        toast.success('Servico Deletado com sucesso!')

    } catch (err) {

        toast.error('Servico não foi Deletado!')
        console.log(err);

    }

};