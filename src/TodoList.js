import React from 'react';
//-----关键代码--------start
// import store from './store'
import {connect} from 'react-redux' //引入连接器
//-----关键代码--------end
const TodoList = (props)=> {
    //-----关键代码--------start
    
    //-----关键代码--------end
    
        let {inputValue,inputChange,clickButton,list} = props
        return (
            <div>
                <div>
                    {/* //-----关键代码--------start */}
                    <input 
                        value={inputValue} 
                        onChange={inputChange} 
                    />
                    {/* //-----关键代码--------end */}
                    <button onClick={clickButton} >提交</button>
                </div>
                <ul>
                    {
                        list
                            .map((item,index)=>{
                                return (<li key={index}>{item}</li>)
                            })
                            
                    }
                </ul>
            </div>
            );
} 



const stateToProps = (state) =>{
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
            // console.log(e.target.value)
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        clickButton(){
            let action = { type:'add_item'}
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);