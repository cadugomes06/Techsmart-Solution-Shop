import './App.css'
import { UserContextProvider } from './context/ProductsContext'
import Products from './pages/Products'


const App = () => {

  return (
    <>
    <UserContextProvider>
      <main>
        <Products />
      </main>
    </UserContextProvider>
    </>
  )
}

export default App
