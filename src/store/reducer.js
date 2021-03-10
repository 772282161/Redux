import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[]
}
// eslint-disable-next-line
 export default (state = defaultState,action) =>{ // 就是一个方法函数
    //Reducer 里只能接收state
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
        newState.inputValue = action.value 
        return newState
    }

    //state值只能传递，不能使用
    if(action.type ===ADD_ITEM){//根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)//push新的内容到列表
        newState.inputValue =''
        return newState
    }

    if(action.type ===DELETE_ITEM){//根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)//push新的内容到列表
        // newState.inputValue =''
        return newState
    }

    if(action.type === GET_LIST){//根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list//复制性的List数组进去
        return newState
    }

    return state
    // console.log(state,action)
    //state: 指的是原始仓库里的状态
    //action:指的是action新传递的状态
}

// state：是整个项目中需要管理的数据信息，这里我没没有什么数据，所以用空对象来表示




