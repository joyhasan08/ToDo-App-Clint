
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Delete } from '../assets/icon';
import { deleteTodoByID, isDoneTodoList } from '../utils/api';

const TodoCard = ({ data }) => {
    const queryClient = useQueryClient();
    const { error, mutate } = useMutation({
        mutationFn: deleteTodoByID,
        onSuccess: (res) => {
            console.log(res)
            queryClient.invalidateQueries(['todos'])
        }
    })

    const { mutate: isdone } = useMutation({
        mutationFn: isDoneTodoList,
        onSuccess: (res) => {
            console.log(res)
            queryClient.invalidateQueries(['todos'])
        }
    })


    const deletHandler = () => {
        console.log('dlt', data._id);
        mutate(data._id)
    }

    const isDoneHandler = () => {
        console.log('done', data._id);
        isdone(data._id)
    }


    return (
        <div>
            {/* card */}
            <div className="card bg-base-100  shadow-xl">
                <div className="card-body">

                    <h2 className="card-title">{data.title}</h2>
                    <div className='divider'></div>
                    <p>{data.task}</p>
                    <p className='divider'></p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-sm text-white bg-[#367588]">Done</button> */}
                        <div className=' justify-end flex items-center gap-1  '>

                            <button onClick={isDoneHandler} className='btn btn-sm btn-outline'>
                                Done
                            </button>

                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="checkbox checkbox-accent w-7 h-7  " />
                                </label>
                            </div>

                            <button onClick={deletHandler} className='w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center hover:bg-red-700'>
                                <span>
                                    <Delete />
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* card end */}
        </div>
    );
};

export default TodoCard;