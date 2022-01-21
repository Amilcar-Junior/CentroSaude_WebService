import {

    CREATE_PACIENTE,

    RETRIEVE_PACIENTES,

    UPDATE_PACIENTE,

    DELETE_PACIENTE,

} from "./actionTypes";

import { toast } from "react-toastify";
import PacientesService from "./pacientesService";

export const createPaciente =

    (bi, nome, data_nascimento, morada, contacto) => async (dispatch) => {

        try {

            const res = await PacientesService.create({

                data:{bi, nome, data_nascimento, morada, contacto}

            });

            const { data } = res.data;
            dispatch({

                type: CREATE_PACIENTE,

                payload: data,
                

            });

            toast.success('Paciente adicionado com sucesso!');
            return Promise.resolve(data);

        } catch (err) {

            toast.error('Paciente não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrievePacientes = () => async (dispatch) => {

    try {

        const res = await PacientesService.getAll();
        const { data } = res.data;
        dispatch({

            type: RETRIEVE_PACIENTES,

            payload: data,

        });

    } catch (err) {

        toast.error('Paciente não encontrado!');
        console.log(err);

    }

};

export const updatePaciente = (id, dados) => async (dispatch) => {

    try {

        const res = await PacientesService.update(id, {data: dados});
        const { data } = res.data;
        dispatch({

            type: UPDATE_PACIENTE,

            payload: data,

        });

        toast.success('Paciente foi alterado com sucesso!')
        return Promise.resolve(data);

    } catch (err) {
        toast.error('Paciente não foi alterado!')
        return Promise.reject(err);

    }

};

export const deletePaciente = (id) => async (dispatch) => {

    try {

        await PacientesService.delete(id);

        dispatch({

            type: DELETE_PACIENTE,

            payload: { id },

        });

        toast.success('Paciente Deletado com sucesso!')

    } catch (err) {

        toast.error('Paciente não foi Deletado!')
        console.log(err);

    }

};