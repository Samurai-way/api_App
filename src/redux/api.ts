import axios from "axios";

// export const instance = axios.create({
//     baseURL: 'https://bloggers-api1.herokuapp.com/bloggers',
//     headers: {
//         // Не забываем заменить API-KEY на собственный
//         'Authorization': 'Basic YWRtaW46cXdlcnR5',
//     },
// })

export const instance = axios.create({
    // baseURL: 'https://bloggers-api1.herokuapp.com',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        // Не забываем заменить API-KEY на собственный
        // 'Authorization': 'Basic YWRtaW46cXdlcnR5',
        'Content-type': 'application/json; charset=UTF-8'
    }
})

export const axiosAPI = {
    get() {
        return instance.get('posts')
    },
    delete(id: number) {
        return instance.delete(`posts/${id}`)
    },
    post(body: {title: string, body: string, userId: number}){
        return instance.post('posts', {body})
    }

}