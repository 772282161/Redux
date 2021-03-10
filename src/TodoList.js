import React, { Component } from 'react';
// import store from './store/index';
import store from './store';
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './store/actionTypes';
import {addItemAction, changeInputAction, deleteItemAction,getMyListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'



// const data=[
//     '早八点开晨会，分配今天的代码任务',
//     '早九点和项目经理开需求沟通会',
//     '早九点和项目经理开需求沟通会',

// ]

class TodoList extends Component {

    constructor(props){
        super(props)
        //关键代码--------start
        this.state = store.getState();
        //关键代码 ------end
        // console.log(this.state)
        this.changeInputValue=this.changeInputValue.bind(this);//绑定指针
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)//订阅Redux的状态
        
    }

    changeInputValue(e){
        // console.log(e.target.value)
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }

    clickBtn(){
        // console.log('jspan.com')
        // const action = {type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    // componentDidMount(){//生命周期函数
    //     const action = getTodoList()
    //     store.dispatch(action)
    // }
    componentDidMount(){
        const action =getMyListAction()
        store.dispatch(action)
        
    }
    

    render() { 
        return ( 
            <TodoListUI 
            inputValue = {this.state.inputValue}
            changeInputValue = {this.changeInputValue}
            clickBtn = { this.clickBtn}
            list = {this.state.list}
            deleteItem = {this.deleteItem}
            />
        );//redux-thunk 中间件
    }
}



export default TodoList;