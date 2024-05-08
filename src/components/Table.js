function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    return (
      <tr className='border-b' key={row.name}>
        <td className='p-3'>{row.name}</td>
        <td className='p-3'>
          <div className={`p-3 m-2 ${row.color}`}></div>
        </td>
        <td className='p-3'>{row.score}</td>
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b2'>
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table;