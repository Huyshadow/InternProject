import "../style/Notification.css"
import {useReducer} from "react";

const initialState:{count: number} = {count: 0}

const reducer = (state : {count :number}, action:string):{count:number} => {

    switch (action) {
        case 'plus':
            return {count: state.count + 1}
        case 'minus':
            state.count = state.count - 1;
            if( state.count <= 0) {
                state.count = 0;
            }
            return {count: state.count }

        default:
            throw new Error('What the heck')
    }
}
const Notification = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className='body-notification'>
                <div className='body-notification-admin'>
                    <h1>Number of Employee</h1>
                    <h1>{state.count}</h1>
                    <div className='body-notification-admin-control'>
                        <button onClick={() => dispatch('plus')}>Add</button>
                        <button onClick={() => dispatch('minus')}>Minus</button>
                    </div>
                </div>
                <div className='body-notification-employee'>
                    <h1>Creator: Quang Huy</h1>
                    <h2>Something will be developed here</h2>
                </div>
            </div>


        </>
    )
}
export default Notification
