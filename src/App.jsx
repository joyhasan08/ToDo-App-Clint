import './App.css'
import AddBtn from './Components/AddBtn'
import DoneContainer from './Components/DoneContainer'
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
      <div className='pb-20'>
        <Navbar />
      </div>
      <div>
        side bar
        <div>side bar content</div>
        <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 4</li>
        </ul>
      </div>
      <div className=' flex flex-col justify-end m-2'>
        <div>
          {/* outlet */}
          <div className='w-full max-w-full lg:max-w-6xl mx-auto bg-base-200 min-h-96 rounded-2xl p-4 m-4  gap-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  '>

            <div className="card bg-base-100  shadow-xl md:col-span-2">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>

            {/* card */}
            {todoData ?
              todoData?.map((data, idx) => <TodoCard key={idx} data={data} />)
              : <></>
            }
            {/* card end */}

          </div>
        </div>
        {/* isDone DoneContainer start*/}
        <div>
          <DoneContainer />
        </div>
        {/* isDone DoneContainer end*/}
        <div className='flex justify-center my-2'>
          <AddBtn />
        </div>
      </div>
    </>
  )
}

export default App
