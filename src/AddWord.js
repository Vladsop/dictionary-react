import React, { useState} from 'react';
import { message, Button, Input} from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

function AddWord(props) {
    const [inputValue, setInputValue] = useState("");

    const AddWord = () => {
        if (props.dictionary.includes(inputValue) === true) {
            message.warning("That word allready exists!", 1);
        } else if (inputValue.includes(" ") === false && inputValue !== "") {
            props.addedWord([...props.dictionary, inputValue]);
            message.success("The word has been successfully stored in the dictionary!", 1);
            resetInputField();
        } else if (inputValue === "" ) {
          message.warning("Please enter a word!", 1);
        } else if (inputValue.includes(" ")) {
          message.warning("Please enter a single word!", 1);
    }
  }

    const handleUserInput = (e) => {
        setInputValue(e.target.value.toLowerCase());
      };

      const resetInputField = () => {
        setInputValue("");
      };

    return (  
        <React.Fragment>
            <div style={{marginBottom: 40}}>
            <Input type="text" value={inputValue} placeholder={"Add a word in the Dictionary"} style={{width: 250}} onChange={handleUserInput}/>
            <Button type="primary" icon={<PlusSquareOutlined />} onClick={AddWord}>Add</Button> 
            </div>
        </React.Fragment>
    );
}

export default AddWord;