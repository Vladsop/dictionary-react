import React from 'react';
import { message, Button} from 'antd';
import { MinusSquareOutlined } from '@ant-design/icons';

function EmptyDictionary(props) {

    const EmptyDictionary = () => {
        props.emptyWords([]); 
        success("Stored words have been deleted!");
    }
    
    const success = (info) => {
        message.success(info, 1);
      };
    
    return(
        <React.Fragment>
        <div style={{marginLeft:120, marginBottom: 40}}>
            <Button type="primary" icon={<MinusSquareOutlined />} onClick={EmptyDictionary}>Empty</Button>
        </div>
        </React.Fragment> 
    )
}

export default EmptyDictionary;