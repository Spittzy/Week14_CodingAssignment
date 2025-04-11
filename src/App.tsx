import Header from './header';
import ItemList from './itemList';
import RecipeForm from './Form';

export default function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />

      <div className='d-flex justify-content-center align-items-center flex-grow-1 m-5'>
        <RecipeForm />
      </div>

      <div className='d-flex flex-grow-1'>
        <ItemList />
      </div>

    </div >
  )
}