import React, {useState} from "react";
import { message, Button, Modal, Input, Popconfirm } from 'antd';
import { OrderedListOutlined, SearchOutlined } from '@ant-design/icons';

function SearchWord(props) {
    const [inputSearchValue, setInputSearchValue] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

      const SearchWord = () => {
        if (inputSearchValue === "") {
            message.warning("Please enter a word!", 1)
        } else if (props.passChildData.includes(inputSearchValue)) {
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

      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      function confirmDeleteWord(word) {
        props.passParentData(props.passChildData.filter((item) => item !== word));
        message.success('Word deleted successfully!');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Operation aborted!');
      }
    
    return(
        <React.Fragment>
            <div style= {{marginBottom: 40}}>
              <Input type="text" value={inputSearchValue} placeholder={"Search a word in the Dictionary"} style={{ width: 250 }} onChange={handleUserInput} />
              <Button type="primary" icon={<SearchOutlined />} onClick={SearchWord}>Search</Button>
            </div>
            <Button type="primary" icon= {<OrderedListOutlined />} style= {{position: 'absolute'}} onClick={showModal}>Words</Button>
            <Modal title="Dictionary" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <h3>
                <ol>
                  {props.passChildData.map(word => 
                  <li key={word}> {word} 
                    <Popconfirm title="Are you sure to delete this word?" onConfirm={() => confirmDeleteWord(word)} onCancel={cancel} okText="Yes" cancelText="No">   
                      <a href="index" style= {{marginLeft: 10, fontSize: 12}}> Delete</a>
                    </Popconfirm>
                  </li>)} 
                </ol>
              </h3>
            </Modal>
        </React.Fragment>
        );
    }

export default SearchWord;