import React, { useContext, useState } from 'react';
import { MyContext } from './App'; 

const MainComp = () => {
  const { goods, addGoods, deleteGoods, updateGoods } = useContext(MyContext);
  const [newItem, setNewItem] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [editedItem, setEditedItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      addGoods(newItem);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    deleteGoods(index);
  };

  const handleEditItem = (index, currentItem) => {
    setEditItemId(index);
    setEditedItem(currentItem);
  };

  const handleSaveEdit = () => {
    if (editedItem.trim() !== '') {
      updateGoods(editItemId, editedItem);
      setEditItemId(null);
      setEditedItem(''); }
  };

  return (
    <div>
      <h2>Goods</h2>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      
      
      <ul>
        {goods.map((item, index) => (
          <li key={index}>
            {editItemId === index ? (
              <>
                <input
                  type="text"
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => handleEditItem(index, item)}>Edit</button>
              </>
            )}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComp;
