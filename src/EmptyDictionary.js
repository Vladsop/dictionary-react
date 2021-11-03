import React from 'react';
import { message, Button} from 'antd';
import { MinusSquareOutlined } from '@ant-design/icons';

function EmptyDictionary(props) {

    const EmptyDictionary = () => {
        props.emptyWords([]); 
        message.success("Stored words have been deleted!");
    }
        
    return(
        <React.Fragment>
        <div style={{marginLeft:120, marginBottom: 40}}>
            <Button type="primary" icon={<MinusSquareOutlined />} onClick={EmptyDictionary}>Empty</Button>
        </div>
        </React.Fragment> 
    )
}

export default EmptyDictionary;