import './App.css'
import Login from './Login'

function App() {
  

  return (
    <>
      <div style={{width:'100%', height:'100vh',backgroundImage:'url(https://t4.ftcdn.net/jpg/02/42/22/57/360_F_242225735_HuCvYbNKVv9TdnHWQo8iLI1JunPJ1YX9.jpg)', backgroundSize:'cover'}} className=' d-flex justify-content-center align-items-center ' >
        <div className='bg-warning p-5 rounded wrapper' style={{width:'500px'}}>
          <h1 className='d-flex justify-content-center align-item-center text-dark'>Register Now</h1>
          <Login/>
        </div>
        

      </div>
    </>
  )
}

export default App