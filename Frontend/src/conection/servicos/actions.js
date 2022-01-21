import {

    CREATE_SERVICO,

    RETRIEVE_SERVICOS,

    UPDATE_SERVICO,

    DELETE_SERVICO,

} from "./actionTypes";

import { toast } from "react-toastify";
import ServicosService from "./servicosService";

export const createServico =

    (descricao, custo, date, tipo, urgente,) => async (dispatch) => {

        try {

            const res = await ServicosService.create({

                data:{descricao, custo, date, tipo, urgente,}

            });

            const { data } = res.data;
            dispatch({

                type: CREATE_SERVICO,

                payload: data,
                

            });

            toast.success('Servico adicionado com sucesso!');
            return Promise.resolve(data);

        } catch (err) {

            toast.error('Servico não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveServicos = () => async (dispatch) => {

    try {

        const res = await ServicosService.getAll();
        const { data } = res.data;
        dispatch({

            type: RETRIEVE_SERVICOS,

            payload: data,

        });

    } catch (err) {

        toast.error('Servico não encontrado!');
        console.log(err);

    }

};

export const updateServico = (id, dados) => async (dispatch) => {

    try {

        const res = await ServicosService.update(id, {data: dados});
        const { data } = res.data;
        dispatch({

            type: UPDATE_SERVICO,

            payload: data,

        });

        toast.success('Servico foi alterado com sucesso!')
        return Promise.resolve(data);

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