import React, {  useState } from "react";

export default function ToDoList() {

  let [inputValue, setInputValue] = useState(''); //Стейт для инпута

  const [listArray, setListArray] = useState([]); //Стейт для массива

  const [state, setState] = useState(true); //Стейт для дизэйбля кнопки 

  //Обработчик клика, который добавляет в массив текст из инпута и динамически обновляет
  function handleClick() {
    setListArray([...listArray, {text: inputValue}])
    setInputValue('')
    setState(true)
  }

  //Реализация удаления элементов из массива
  function handleDelete(index) {
    setListArray([...listArray.slice(0, index), ...listArray.slice(index + 1)]);
  }

  //Обработчик инпута
  function handleInput(e) {
    setInputValue(e.target.value)
    if (e.target.value === '') {
      setState(true)
    } else {
      setState(false)
    }
  }
  
  //Функция, которая проходит по массиву и возвращает элемент списка
  const listItem = listArray.map((task, i) => (
    <div key={i} className="list-item">
      <p className="list-item__text">{task.text}</p>
      <button className="list-item__delete-button" onClick={() => handleDelete(i)}></button>
    </div>
  ))

  return (
    <>
    <div className="list-box">
      <h2 className="list-box__header">To do list</h2>
      <div className="list-box__container">
        <div className="list-box__list">{listItem}</div>
      </div>
    </div>

    <div className="interface-container">
      <div className="input-window">
        <p className="input-window__paragr">{inputValue}</p>
      </div>

      <div className="input-and-button">
        <input className="input-and-button__input" onChange={handleInput} placeholder="Введите сообщение" maxLength="115" value={inputValue}></input>
        <button className="input-and-button__button" onClick={handleClick} disabled={state}>КЛАЦ!</button>
      </div>
    </div>
    </>
  );
}
