const defalutState = {
    inputValue : 'hello world',
    list :[]
}

// eslint-disable-next-line
export default (state = defalutState,action) =>{
    if(action.type ==='change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.inputValue
        return newState
    }

    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue= ''
        return newState
    }

    return state
}
