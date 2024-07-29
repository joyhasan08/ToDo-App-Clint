import { useQuery } from "@tanstack/react-query";
import { getIsDoneTodoList } from "../utils/api";
import TodoCard from "./TodoCard";

const DoneContainer = () => {

    const { data } = useQuery({
        queryKey: ['doneList'],
        queryFn: getIsDoneTodoList,
        initialData: [],
    })

    return (

        <div>
            {
                data ?
                    data.map((data) => (
                        <TodoCard key={data._id} data={data} />
                    ))
                    :
                    <></>
            }
        </div>
    );
};

export default DoneContainer;