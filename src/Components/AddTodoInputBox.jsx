import { useState } from "react";
import swal from "sweetalert";


const initData = {
    title: '',
    task: ''
}

const AddTodoInputBox = () => {
    const [todoData, setTodoData] = useState(initData)

    const handleChange = (event) => {

        const { name, value } = event.target
        setTodoData((prev) => ({ ...prev, [name]: value }))
        console.log(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(todoData);
        // Retrieve the existing array from local storage
        let existingData = JSON.parse(window.localStorage.getItem("userData")) || [];

        // Ensure existingData is an array
        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Add the new user data to the array
        const updatedData = [...existingData, todoData];

        // Save the updated array back to local storage
        window.localStorage.setItem("userData", JSON.stringify(updatedData));

        console.log(updatedData);  // Log the updated data for debugging

        // swal("successful!", "Payment information added", "success");
        swal("Good job!", "You clicked the button!", "success")
        window.location.reload()


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