import React from 'react';
import { Delete } from '../assets/icon';

const TodoCard = ({ data }) => {
    console.log(data);

    return (
        <div>
            {/* card */}
            <div className="card bg-base-100 w-64 shadow-xl">
                <div className="card-body">

                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.task}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-sm text-white bg-[#367588]">Done</button> */}
                        <div className=' justify-end flex items-center gap-1  '>
                            <div className="form-control">
                                <label className="cursor-pointer label">

                                    <input type="checkbox" className="checkbox checkbox-accent w-7 h-7  " />
                                </label>
                            </div>
                            <button className='w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center hover:bg-red-700'> <span>
                                <Delete />   </span> </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* card end */}
        </div>
    );
};

export default TodoCard;