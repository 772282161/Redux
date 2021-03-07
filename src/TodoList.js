import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import store from './store/index';
import store from './store';
import {Input,Button,List} from 'antd' ;
const data=[
    '早八点开晨会，分配今天的代码任务',
    '早九点和项目经理开需求沟通会',
    '早九点和项目经理开需求沟通会',

]

class TodoList extends Component {

    constructor(props){
        super(props)
        //关键代码--------start
        this.state = store.getState();
        //关键代码 ------end
        // console.log(this.state)
        this.changeInputValue=this.changeInputValue.bind(this);//绑定指针
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)//订阅Redux的状态
    }

    changeInputValue(e){
        // console.log(e.target.value)
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }



    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <input placeholder={this.state.inputValue}  
                    style={{width:'250px' ,marginRight:'10px' }} 
                    onChange={this.changeInputValue} 

                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List 
                        bordered 
                        //关键代码------start
                        dataSource={this.state.list} 
                        // 关键代码------end
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}



export default TodoList;