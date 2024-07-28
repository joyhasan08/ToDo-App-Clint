import axios from "axios"

const url = "http://localhost:3000"

const fetch = axios.create({ baseURL: url })

export const getTodoData = async () => {
    const data = await fetch.get("/todo/all")
    return data.data
}

export const addTodoData = async (data) => {
    const resData = await fetch.post("/todo/addtodo", data)
    console.log(resData.data);
    return resData.data
}


