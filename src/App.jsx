import React, { createContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainComp from './MainComp';


export const MyContext = createContext();

const App = () => {
  const [goods, setGoods] = useState(["item 1", "item 2", "item 3", "item 4"]);

  const addGoods = (newItem) => {
    setGoods([...goods, newItem]);
  };

  const deleteGoods = (index) => {
    const updatedGoods = goods.filter((item, i) => i !== index);
    setGoods(updatedGoods);
  };

  const updateGoods = (index, newName) => {
    const updatedGoods = [...goods];
    updatedGoods[index] = newName;
    setGoods(updatedGoods);
  };

  return (
    <MyContext.Provider value={{ goods, addGoods, deleteGoods, updateGoods }}>
      <div className="app">
        <Header />
        <MainComp />
        <Footer />
      </div>
    </MyContext.Provider>
  );
};

export default App;
