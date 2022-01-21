import {

    CREATE_ESTOQUE,

    RETRIEVE_ESTOQUES,

    UPDATE_ESTOQUE,

    DELETE_ESTOQUE,

} from "./actionTypes";

import { toast } from "react-toastify";
import EstoquesService from "./estoquesService";

export const createEstoque =

    (nome_produto, quantidade) => async (dispatch) => {

        try {

            const res = await EstoquesService.create({

                data:{nome_produto, quantidade}

            });

            const { data } = res.data;
            dispatch({

                type: CREATE_ESTOQUE,

                payload: data,
                

            });

            toast.success('Estoque adicionado com sucesso!');
            return Promise.resolve(data);

        } catch (err) {

            toast.error('Estoque não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveEstoques = () => async (dispatch) => {

    try {

        const res = await EstoquesService.getAll();
        const { data } = res.data;
        dispatch({

            type: RETRIEVE_ESTOQUES,

            payload: data,

        });

    } catch (err) {

        toast.error('Estoque não encontrado!');
        console.log(err);

    }

};

export const updateEstoque = (id, dados) => async (dispatch) => {

    try {

        const res = await EstoquesService.update(id, {data: dados});
        const { data } = res.data;
        dispatch({

            type: UPDATE_ESTOQUE,

            payload: data,

        });

        toast.success('Estoque foi alterado com sucesso!')
        return Promise.resolve(data);

    } catch (err) {
        toast.error('Estoque não foi alterado!')
        return Promise.reject(err);

    }

};

export const deleteEstoque = (id) => async (dispatch) => {

    try {

        await EstoquesService.delete(id);

        dispatch({

            type: DELETE_ESTOQUE,

            payload: { id },

        });

        toast.success('Estoque Deletado com sucesso!')

    } catch (err) {

        toast.error('Estoque não foi Deletado!')
        console.log(err);

    }

};