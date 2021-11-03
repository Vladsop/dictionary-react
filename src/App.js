import React, {useState} from 'react';
import AddWord from './AddWord';
import SearchWord from './SearchWord';
import Words from './Words';
import EmptyDictionary from './EmptyDictionary';
import 'antd/dist/antd.css';

function App() {
  const [dictionary, setDictionary] = useState([]);

  return (
    <div style={{marginLeft: 10, marginTop: 20}}>
      <h1>Dictionary</h1>
      <AddWord dictionary={dictionary} addedWord={setDictionary}/>
      <SearchWord dictionary={dictionary} searchedWord={setDictionary}/>
      <Words dictionary={dictionary} selectedWord={setDictionary}/>
      <EmptyDictionary dictionary={dictionary} emptyWords={setDictionary}/>
    </div>
  );
}

export default App;
