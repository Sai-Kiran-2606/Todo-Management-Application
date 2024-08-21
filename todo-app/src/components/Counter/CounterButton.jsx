export default function CounterButton({by, callIncrementParent, callDecrementParent}){

    return (
        <div className="CounterButton">
            <button className="counterButton" onClick={() => callIncrementParent(by)}>+{by}</button>
            <button className="counterButton" onClick={() => callDecrementParent(by)}>-{by}</button>
        </div>
    );
}