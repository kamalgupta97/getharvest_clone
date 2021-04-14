import React from 'react'
import { PROJECT_FAILURE, PROJECT_SUCCESS, PROJECT_REQUEST } from './projectActionType'
import Axios from "axios"




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
        baseURL: "https://c2ec8.sse.codesandbox.io"
    });

    axios({
        url: "/projects",
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
                businessDevelopment: inp.businessdevelopment,
                design: inp.design,
                marketing: inp.marketing,
                programming: inp.programming,
                projectManagement: inp.projectmanagement

            }
        }
    })
    .then((res) => console.log(res))

}



export { projectSuccess, projectFailure, projectData }