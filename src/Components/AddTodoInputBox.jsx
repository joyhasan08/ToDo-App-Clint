import { useState } from "react";
import swal from "sweetalert";
import { addTodoData } from "../utils/api";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useMutationHook from "../hooks/useMutationHook";


const initData = {
    title: '',
    task: ''
}

const AddTodoInputBox = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, error, isError, isSuccess } = useMutation({
        mutationFn: addTodoData,
        onSuccess: (res) => {
            console.log(res);
            queryClient.invalidateQueries(['todos'])
        },
        onError: (error) => {
            console.log(error.response.data);
            console.log("error");
        }

    })
    //alternation way of useMutation

    // const { errorMessage, isPending, error, mutate } = useMutationHook(addTodoData, {
    //     key: ['todos'],
    //     // onSuccess: (data) => {
    //     //     console.log(data);
    //     // }
    // })

    console.log(error);
    console.log(isPending);
    const [todoData, setTodoData] = useState(initData)

    const handleChange = (event) => {

        const { name, value } = event.target
        setTodoData((prev) => ({ ...prev, [name]: value }))
        console.log(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(todoData);
        // const resData = await addTodoData(todoData)
        // console.log(resData);
        mutate(todoData)

    }

    return (
        <div>
            <form className="max-w-3xl mx-auto flex flex-col gap-2" action="">

                <div className="flex flex-col gap-1 ">
                    <label className="font-medium"> Task Title</label>
                    <input onChange={handleChange} name="title" placeholder="Add Task Title" className="input input-info focus:ring-1" type="text" />
                </div>

                <div>
                    <div className="flex flex-col gap-1 ">
                        <label className="font-medium">Task Item :</label>
                        <textarea onChange={handleChange} name="task" placeholder="Add Todo Here..." className="input input-info input-bordered focus:ring-1 min-h-28" id="" rows="4"></textarea>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <button onClick={onSubmit} className="btn btn-circle bg-green-300 m-2 mx-auto hover:bg-green-400 ">➕</button>
                </div>
            </form>


        </div>
    );
};

export default AddTodoInputBox;