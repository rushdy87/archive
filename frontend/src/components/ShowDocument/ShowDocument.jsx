import './ShowDocument.scss';

const ShowDocument = ({ document }) => {
  return (
    <div className='show-doc-container'>
      <div className='show-doc-header'>
        <h1>{document.subject}</h1>
      </div>
      <div className='show-doc-row_1'>
        <div className='show-doc-cell'>
          <span>العدد:</span>
          <span>{document.id}</span>
        </div>
        <div className='show-doc-cell'>
          <span>التاريخ:</span>
          <span>{document.date}</span>
        </div>
        <span className='show-doc-type'>
          {document.type === 'ingoing' ? 'وارد' : 'صادر'}
        </span>
      </div>
      <div className='show-doc-row_2'>
        <div className='show-doc-cell'>
          <span>الموضوع:</span>
          <span>{document.subject}</span>
        </div>
        <div className='show-doc-cell'>
          <span>الجهة:</span>
          <span>{document.correspondent}</span>
        </div>
      </div>
      {document.type === 'ingoing' && (
        <div className='show-doc-row_3'>
          <div className='show-doc-cell'>
            <span>تاريخ الكتاب:</span>
            <span>{document.document_date}</span>
          </div>
          <div className='show-doc-cell'>
            <span>رقم الكتاب:</span>
            <span>{document.document_id}</span>
          </div>
        </div>
      )}
      <div className='show-doc-employess'>
        {document.employess.length > 0 && (
          <>
            <span>المعنيون: </span>
            {document.employess.map((person, i) => (
              <span key={person}>
                {`${person} ${
                  i !== document.employess.length - 1 ? ' - ' : ''
                }`}
              </span>
            ))}
          </>
        )}
      </div>
      <div className='show-doc-tags'>
        {document.tags.length > 0 &&
          document.tags.map((tag, i) => (
            <span key={tag}>
              {`${tag} ${i !== document.tags.length - 1 ? ' - ' : ''}`}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ShowDocument;
