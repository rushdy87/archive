import './DocumentsTable.scss';

const DocumentsTable = ({ documents }) => {
  const renderRows = documents.map((doc) => {
    return (
      <tr key={doc.id}>
        <td>{doc.id}</td>
        <td>{doc.data}</td>
        <td>{doc.correspondent}</td>
        <td>{doc.subject}</td>
        {doc.tag.length > 0 && (
          <td>
            {doc.tag.map((t) => (
              <span key={t}>{` ${t} `}</span>
            ))}
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className='table-container'>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>الرقم</th>
            <th>التاريخ</th>
            <th>الجهة</th>
            <th>الموضوع</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
