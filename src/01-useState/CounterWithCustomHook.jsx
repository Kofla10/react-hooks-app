import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {



  const {counter, onSum, onResta, onReset } = useCounter( 15);

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>

      <hr/>

      <button onClick = { () =>  onResta(3) } className="btn btn-info">-1</button>
      <button onClick = { onReset } className="btn btn-secondary">Reset</button>
      <button onClick = { () =>  onSum(5) } className="btn btn-info">+1</button>
    </>
  )
}
