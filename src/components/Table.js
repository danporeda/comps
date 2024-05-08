function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return (
        <td className='p-2' key={column.label}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr className='border-b' key={row.name}>
        {renderedCells}
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