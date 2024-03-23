import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';

function App() {

const name = "Praveen";

  const [items, setItems] = useState(
    [
      { id:1,
        checked: true,
        item: "Practise Coding"
      },
      { id:2,
        checked: false,
        item: "Play Cricket"
      },      
      { id:3,
        checked: false,
        item: "Read about AI"
      }


  ]);


  const handleCheck = (id) => {
    const listItems = items.map((item) =>
    item.id===id ? {...item, checked:!item.checked} :
    item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
    (listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
    item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
    (listItems))
  }

  return (
    <div>
          <Header title={name}
          />
          <Content 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          setItems = {setItems}
          />
          <Footer 
          length = {items.length}
          />
    </div>
  );
}

export default App;
