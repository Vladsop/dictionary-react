import React, {useState} from "react";
import { message, Button, Modal, Popconfirm } from 'antd';
import { OrderedListOutlined} from '@ant-design/icons';

function Words(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
        props.selectedWord(props.dictionary.filter((item) => item !== word));
        message.success('Word deleted successfully!');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Operation aborted!');
      }

    return (
        <React.Fragment>
        <Button type="primary" icon={<OrderedListOutlined />} style={{position: 'absolute'}} onClick={showModal}>Words</Button>
            <Modal title="Dictionary" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <h3>
                <ol>
                  {props.dictionary.map(word => 
                  <li key={word}> {word} 
                    <Popconfirm title="Are you sure to delete this word?" onConfirm={() => confirmDeleteWord(word)} onCancel={cancel} okText="Yes" cancelText="No">   
                      <a href="index" style={{marginLeft: 10, fontSize: 12}}> Delete</a>
                    </Popconfirm>
                  </li>)} 
                </ol>
              </h3>
            </Modal>
        </React.Fragment>
      );
}

export default Words;