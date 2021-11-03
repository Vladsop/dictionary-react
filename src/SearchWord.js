import React, {useState} from "react";
import { message, Button, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchWord(props) {
    const [inputSearchValue, setInputSearchValue] = useState("");
    

      const SearchWord = () => {
        if (inputSearchValue === "") {
            message.warning("Please enter a word!", 1)
        } else if (props.dictionary.includes(inputSearchValue)) {
            message.success("The searched word is found in the Dictionary!", 1);
            resetInputField();
        } else {
            message.warning("The searched word doesn't exist!", 1);
        }
      }

      const handleUserInput = (e) => {
        setInputSearchValue(e.target.value.toLowerCase());
      };

      const resetInputField = () => {
        setInputSearchValue("");
      };
    
    return(
        <React.Fragment>
            <div style={{marginBottom: 40}}>
              <Input type="text" value={inputSearchValue} placeholder={"Search a word in the Dictionary"} style={{width: 250}} onChange={handleUserInput} />
              <Button type="primary" icon={<SearchOutlined />} onClick={SearchWord}>Search</Button>
            </div>
        </React.Fragment>
        );
    }

export default SearchWord;