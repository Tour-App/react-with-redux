import { CuentaContext } from "../App";

function Cuenta() {
  return (
    <CuentaContext.Consumer>
      {(value) => (<h2>{value.cuenta}</h2>)}
    </CuentaContext.Consumer>
  )
}

export default Cuenta;
