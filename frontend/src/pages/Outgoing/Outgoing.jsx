import DocumentsTable from '../../components/DocumentsTable/DocumentsTable';
import './Outgoing.scss';

import { data } from '../../data/outgoing';

const Outgoing = () => {
  return (
    <div className='ingoing-container'>
      <h1 className='title'>سجل الصادر</h1>
      <DocumentsTable documents={data} />
    </div>
  );
};

export default Outgoing;
