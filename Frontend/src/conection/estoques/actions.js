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

                nome_produto, 
                quantidade

            });

            
            dispatch({

                type: CREATE_ESTOQUE,

                payload: res.data,
                

            });

            toast.success('Estoque adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Estoque não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrieveEstoques = () => async (dispatch) => {

    try {

        const res = await EstoquesService.getAll();
        
        dispatch({

            type: RETRIEVE_ESTOQUES,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Estoque não encontrado!');
        console.log(err);

    }

};

export const updateEstoque = (id, data) => async (dispatch) => {

    try {

        const res = await EstoquesService.update(id, data);
        
        dispatch({

            type: UPDATE_ESTOQUE,

            payload: res.data,

        });

        toast.success('Estoque foi alterado com sucesso!')
        return Promise.resolve(res.data);

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