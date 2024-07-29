import AddTodoInputBox from "./AddTodoInputBox";


const AddBtn = () => {
    const closeModal = () => {
        document.getElementById('my_modal_4').close();
    };

    return (
        <div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-white bg-[#DCBF57]" onClick={() => document.getElementById('my_modal_4').showModal()}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-sm btn-circle bg-red-300 hover:bg-red-400  text-white">✖️</button>
                        </form>
                    </div>
                    {/* <h3 className="font-bold text-lg my-2">Hello!</h3> */}

                    <div className="w-full">
                        <AddTodoInputBox closeModal={closeModal} />
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddBtn;