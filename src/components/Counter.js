import { useSelector } from 'react-redux'

function Counter() {
    const number=useSelector(state=>state.counter.value)
  return (
    <div className='py-9'>
        <h1 className='text-3xl'>Your Value :{number}</h1>
    </div>
  )
}

export default Counter