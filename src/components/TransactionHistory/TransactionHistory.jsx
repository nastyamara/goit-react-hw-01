import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return( <table className={css.container}>
  <thead>
    <tr>
      <th className={css.header}>Type</th>
      <th className={css.header}>Amount</th>
      <th className={css.header}>Currency</th>
    </tr>
  </thead>

  <tbody>{items.map((item) => (
    <tr className={css.row} key={item.id}>  
        <td className={css.data}><span className={css.type}> {item.type} </span>
       
      </td>
      <td className={css.data}>{item.amount }</td>
      <td className={css.data}>{item.currency}</td>
       </tr>
  ))}
        
  </tbody>
</table>)
   
};
