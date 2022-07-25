import { Login } from './module/auth/Login';
import { Register } from './module/auth/Register';
import { Todo } from './module/Todo/Todo';
// import { Login } from './modules/Todo/auth/Login';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { TestPost } from './components/testComponents/TestPost';
import { Nav } from './components/Nav';
import { RedirectRoute } from './components/RedirectRoute';
function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Login/> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      <BrowserRouter>
          <Nav/>
        <Routes>
          <Route path="/" element={
            <RedirectRoute  >
              <Login />
            </RedirectRoute>
          } />
          <Route path="/register" element={
            <RedirectRoute  >
              <Register />
            </RedirectRoute>
          } />
          <Route path="/todo" element={
            <RedirectRoute  privatePath >
              <Todo />
            </RedirectRoute>
          } />
          <Route path="/test" element={
            <RedirectRoute  privatePath >
              "test"
            </RedirectRoute>
          } />
          <Route path='/post/:slug' element={<TestPost/>} />
          <Route path='*' element={
            <main style={{ padding: "1rem" }} >
              <h1>404</h1>
              <p>Page not found</p>
            </main>
          } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
