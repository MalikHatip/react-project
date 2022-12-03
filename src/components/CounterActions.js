import { increment,decrement,incrementByAmount } from '../stores/counter'
import { useDispatch } from 'react-redux'

function CounterActions() {
    const dispatch=useDispatch()
  return (
    <div className='py-10 mb-3 text-3xl flex items-baseline gap-10 text-center place-content-center  '>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-40' onClick={()=>dispatch(increment())}>Arttır(+)</button>
        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>dispatch(decrement())}>Azalt(-)</button>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>dispatch(incrementByAmount(5))}>Arttır(+5)</button>
        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>dispatch(incrementByAmount(-5))}>Azalt(-5)</button>



    </div>
  )
}

export default CounterActions