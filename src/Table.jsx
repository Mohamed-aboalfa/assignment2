

function Table  ({data})  {
  return (
    <div>
      <table>
  <thead>
    <tr>
<th>{data.coulmnsName.col1}</th>
<th>{data.coulmnsName.col2}</th>
<th>{data.coulmnsName.col3}</th>
    </tr>
  </thead>

  <tbody>
    <tr >
      <td>{data.dataName.name}</td>
      <td>{data.dataName.age}</td>
      <td>{data.dataName.city}</td>
    </tr>

    
   
  </tbody>

 
</table>
    </div>
  )
}

export default Table
