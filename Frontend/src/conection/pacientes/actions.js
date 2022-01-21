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

                bi, nome, data_nascimento, morada, contacto

            });


            dispatch({

                type: CREATE_PACIENTE,

                payload: res.data,
                

            });

            toast.success('Paciente adicionado com sucesso!');
            return Promise.resolve(res.data);

        } catch (err) {

            toast.error('Paciente não adicionado!')
            return Promise.reject(err);

        }

    };

export const retrievePacientes = () => async (dispatch) => {

    try {

        const res = await PacientesService.getAll();

        dispatch({

            type: RETRIEVE_PACIENTES,

            payload: res.data,

        });

    } catch (err) {

        toast.error('Paciente não encontrado!');
        console.log(err);

    }

};

export const updatePaciente = (id, data) => async (dispatch) => {

    try {

        const res = await PacientesService.update(id, data);

        dispatch({

            type: UPDATE_PACIENTE,

            payload: res.data,

        });

        toast.success('Paciente foi alterado com sucesso!')
        return Promise.resolve(res.data);

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