
import { useEffect, useState } from 'react'
import './App.css'
import AddBtn from './Components/AddBtn'

import Navbar from './Components/Navbar'
import TodoCard from './Components/TodoCard'
import { getTodoData } from './utils/api'
import { useQuery } from '@tanstack/react-query'


function App() {
  // const newtodoListData = window.localStorage.getItem('userData')
  // const todoData = JSON.parse(newtodoListData)

  // const [todoData, setTodoData] = useState([]);

  // useEffect(() => {
  //   getTodoData().then(data => setTodoData(data))
  // }, [])

  // console.log(todoData);

  const { data: todoData, isLoading, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoData,
    initialData: [],
  })

  console.log(isPending);


  return (
    <>
      <Navbar />
      <div>
        side bar
      </div>
      <div className=' flex flex-col justify-end m-2'>
        <div>
          {/* outlet */}
          <div className='max-w-6xl mx-auto bg-base-200 min-h-96 rounded-2xl p-4 m-4 flex gap-4 flex-wrap  '>


            {/* <div className="card bg-base-100 w-64 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn text-white bg-[#367588]">Done</button>
                </div>
              </div>
            </div> */}


            {/* card */}
            {todoData ?
              todoData?.map((data, idx) => <TodoCard key={idx} data={data} />)
              : <></>
            }
            {/* card end */}

          </div>
        </div>
        <div className='flex justify-center my-2'>
          <AddBtn />
        </div>
      </div>
    </>
  )
}

export default App
