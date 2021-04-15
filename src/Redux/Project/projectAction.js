import React from 'react'
import { PROJECT_FAILURE, PROJECT_SUCCESS, PROJECT_REQUEST } from './projectActionType'
import Axios from "axios"
import app from "../../Components/Auth/firebase"


const projectSuccess = (paylod) => {
    return {
        type: PROJECT_SUCCESS,
        paylod: paylod
    }
}

const projectFailure = () => {
    return {
        type: PROJECT_FAILURE,
    }
}
const projectRequest = () => {
    return {
        type: PROJECT_REQUEST,
    }
}


const projectData = (inp) => (dispatch) => {

    dispatch(projectRequest());

    const axios = Axios.create({
       // baseURL: "https://c2ec8.sse.codesandbox.io"
        baseURL: "https://auth-dev-9137e-default-rtdb.firebaseio.com"
    });

    axios({
        url: "/projects.json",
        method: "post",
        data: {
            client: inp.client,
            pname: inp.pname,
            pcode: inp.pcode,
            starton: inp.starton,
            endson: inp.endson,
            notes: inp.notes,
            projectType: [
                {
                    hourlyRates: inp.hourlyrates,
                    budget: inp.budget
                },
                {
                    projectFee: inp.projectfee,
                    fixedFeeBudget: inp.fixedfeebudget
                },
                {
                    nonBillableBudget: inp.nonbillablebudget
                }
            ],
            tasks: {
                businessDevelopment: inp.bd,
                design: inp.design,
                marketing: inp.marketing,
                programming: inp.programming,
                projectManagement: inp.projectMan

            }
        }
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error))

}



export { projectSuccess, projectFailure, projectData }