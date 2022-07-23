import lalihoApi from "../api/lalihoApi";

export async function signUp(data){
    const response = await lalihoApi.post('/auth/signup', data)
    console.log(response.data)
    return response.data
}

export async function signIn(data){
    const response = await lalihoApi.post('/auth/signin', data)
    console.log(response.data)
    return response.data
}