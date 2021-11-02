import React, {useState} from 'react';
import AddWord from './AddWord';
import SearchWord from './SearchWord';
import EmptyDictionary from './EmptyDictionary';
import 'antd/dist/antd.css';

function App() {
  const [dictionary, setDictionary] = useState([]);

  return (
    <div style= {{marginLeft: 10, marginTop: 20}}>
      <h1>Dictionary</h1>
      <AddWord passChildData= {dictionary} passParentData= {setDictionary}/>
      <SearchWord passChildData= {dictionary} passParentData= {setDictionary}/>
      <EmptyDictionary passChildData= {dictionary} passParentData= {setDictionary}/>
    </div>
  );
}

export default App;
