import FooterComponent from "./Components/FooterComponents"
import HeaderComponents from "./Components/HeaderComponents"
import ListTodoComponents from "./Components/ListTodoComponents"
import './App.css'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import TodoComponents from "./Components/TodoComponents"
import RegisterComponents from "./Components/RegisterComponents"
import LoginComponents from "./Components/LoginComponents"
import { isUserLoggedIn } from './service/AuthService'



function App() {

  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }
 

  return (
    <>
     <BrowserRouter>
     <HeaderComponents/>
     <Routes>
              {/* http://localhost:8080 */}
              <Route path='/' element = { <ListTodoComponents /> }></Route>
               {/* http://localhost:8080/todos */}
              <Route path='/todos' element = { 
                    <AuthenticatedRoute>
                    <ListTodoComponents />
                  </AuthenticatedRoute> 
               }></Route>

              <Route path='/add-todo' element = { 
                <AuthenticatedRoute>
                <TodoComponents />
              </AuthenticatedRoute> 
               }></Route>

              <Route  path='/update-todo/:id' element = { <TodoComponents /> }></Route>

              <Route  path='/register' element = { <RegisterComponents /> }></Route>

              <Route  path='/login' element = { <LoginComponents /> }></Route>


          
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
