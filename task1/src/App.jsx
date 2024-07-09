import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [dataList, setDataList] = useState({
    directorname: "",
    movieName: "",
  });
  const [dataset, setDataSet] = useState([]);

  const handleInput1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInput2 = (event) => {
    setInputValue2(event.target.value);
  };

  const addInput = () => {
    const list = { ...dataList };
    list.directorname = inputValue1;
    list.movieName = inputValue2;
    setDataList(list); 

    const set = [...dataset];
    set.push({ ...list });
    setDataSet(set);

    console.log(dataList.directorname);
    setInputValue1('');
    setInputValue2('');
  };

  function deleteresult(ind){
    let deletedList = dataset.filter((items,index)=>index != ind)
    setDataSet(deletedList)
  }

  return (
    <div className="container">
      <header>
        <h1>Director and Movies</h1>
      </header>
      <section className="addingsection">
        <input
          type="text"
          value={inputValue1}
          onChange={handleInput1}
          placeholder="Director Name"
        />
        <input type="text" value={inputValue2} onChange={handleInput2} placeholder="Movie Name" />
        <button className="addButton" onClick={addInput}>
          Add
        </button>
      </section>
      <section className="resultSection">
        {dataset.map((items , index) => (
          <div className="Result">
            <div className="outbox">{items.directorname}</div>
            <div className="outbox">{items.movieName}</div>
            <button onClick={()=>deleteresult(index)} className="removeButton">Remove</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
