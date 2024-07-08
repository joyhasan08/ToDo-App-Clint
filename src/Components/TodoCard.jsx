import React from 'react';

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
                        <button className="btn text-white bg-[#367588]">Done</button>
                    </div>
                </div>
            </div>
            {/* card end */}
        </div>
    );
};

export default TodoCard;