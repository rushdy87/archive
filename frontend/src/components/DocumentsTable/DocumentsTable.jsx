import { useState } from 'react';
import Modal from '../Modal/Modal';
import ShowDocument from '../ShowDocument/ShowDocument';

import './DocumentsTable.scss';

const DocumentsTable = ({ documents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [documentToModal, setDocumentToModal] = useState(null);

  const openModalHandler = (doc) => {
    setDocumentToModal(doc);
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setDocumentToModal(null);
    setIsOpen(false);
  };

  const renderRows = documents.map((doc) => {
    return (
      <tr key={doc.id} onClick={() => openModalHandler(doc)}>
        <td>{doc.id}</td>
        <td>{doc.date}</td>
        <td>{doc.correspondent}</td>
        <td>{doc.subject}</td>
        {doc.tags.length > 0 && (
          <td>
            {doc.tags.map((t) => (
              <span key={t}>{` ${t} `}</span>
            ))}
          </td>
        )}
      </tr>
    );
  });

  return (
    <>
      {isOpen && (
        <Modal closeOverlay={closeModalHandler}>
          {<ShowDocument document={documentToModal} />}
        </Modal>
      )}
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
    </>
  );
};

export default DocumentsTable;
