import axios from "axios"
import { URL_API } from "../helper"

export const getUsers = () => {
    return (dispatch) => {
        axios.get(URL_API + `/users`)
            .then(res => {
                console.log("Get users :", res.data)
            }).catch(err => {
                console.log("Error get users :", err)
            })
    }
}

// fungsi login algorithm
/**
 * 1. menerima parameter username dan password
 * 2. Jika user ada maka simpan datanya ke reducer dan disimpan di asyncstorage
 * 3. console.log('userNotFOund')
 */