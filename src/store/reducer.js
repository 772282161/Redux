const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一个小时'
    ]
}
export default (state = defaultState,action) =>{ // 就是一个方法函数
    //Reducer 里只能接收state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value 
        return newState
    }
    return state
    // console.log(state,action)
    //state: 指的是原始仓库里的状态
    //action:指的是action新传递的状态
}

// state：是整个项目中需要管理的数据信息，这里我没没有什么数据，所以用空对象来表示




