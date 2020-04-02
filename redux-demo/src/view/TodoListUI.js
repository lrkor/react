import React from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUi = (props) => {
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px' }}
                    onChange={props.changeInputValue} />
                <Button type="primary" onClick={props.click}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { props.delItem(index) }}>{item}</List.Item>
                        // <List.Item>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default TodoListUi;