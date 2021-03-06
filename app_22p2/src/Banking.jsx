import { useContext, useState } from "react";
import { BankingContext } from "./banking-context";

const Banking = () => {
  const { balance, dispatch } = useContext(BankingContext);
  const [amount, setAmount] = useState("");
  return (
    <div className="">
      <h1>Balance is {balance}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={() => dispatch({ type: "WITHDRAW", amount }, setAmount(""))}>
        Withdraw
      </button>
      <button
        onClick={() => dispatch({ type: "DEPOSIT", amount }, setAmount(""))}>
        Deposit
      </button>
      <button onClick={() => dispatch({ type: "FD", amount }, setAmount(""))}>Fixed Deposit</button>
      <button onClick={() => dispatch({ type: "DELETE", amount })}>Delete Account</button>
    </div>
  );
};
export default Banking;
