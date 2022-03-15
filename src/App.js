import './App.css';
import Header from './myComponents/Header'
import { Footer } from './myComponents/Footer';
import { Todo } from './myComponents/Todo';
import { Todos } from './myComponents/Todos';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Todos />
      <Todo />
    </>
  );
}

export default App;