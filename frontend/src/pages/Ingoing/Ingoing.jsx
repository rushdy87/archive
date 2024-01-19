import DocumentsTable from '../../components/DocumentsTable/DocumentsTable';
import './Ingoing.scss';

import { data } from '../../data/ingoing';

const Ingoing = () => {
  return (
    <div className='ingoing-container'>
      <h1 className='title'>سجل الوارد</h1>
      <DocumentsTable documents={data} />
    </div>
  );
};

export default Ingoing;
