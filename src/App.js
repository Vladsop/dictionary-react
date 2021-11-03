import React, {useState, useEffect} from 'react';
import AddWord from './AddWord';
import SearchWord from './SearchWord';
import Words from './Words';
import EmptyDictionary from './EmptyDictionary';
import 'antd/dist/antd.css';

const LOCAL_STORAGE_KEY = 'dictionary.array';

function App() {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    const storedDictionary= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedDictionary) setDictionary(storedDictionary)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dictionary))
  }, [dictionary])

  return (
    <div style={{marginLeft: 10, marginTop: 20}}>
      <h1>Dictionary</h1>
      <AddWord dictionary={dictionary} addedWord={setDictionary}/>
      <SearchWord dictionary={dictionary}/>
      <Words dictionary={dictionary} selectedWord={setDictionary}/>
      <EmptyDictionary emptyWords={setDictionary}/>
    </div>
  );
}

export default App;
