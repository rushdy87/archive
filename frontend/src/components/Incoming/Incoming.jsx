import {data} from '../../data/income'
import Search from '../Search/Search';
import './Incoming.css'

const Incoming = () => {
  return (
    <div className='incoming-container'>
      سجل الوارد
      <Search />
      <div>Add</div>
      <table className="styled-table">
    <thead>
        <tr>
            <th>الرقم</th>
            <th>التاريخ</th>
            <th>الجهة</th>
            <th>رقم المستند</th>
            <th>تاريخ المستند</th>
            <th>الموضوع</th>
        </tr>
    </thead>
    <tbody>
      {
        data.map(doc => {
          return (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.incoming_data}</td>
              <td>{doc.from}</td>
              <td>{doc.document_id}</td>
              <td>{doc.document_date}</td>
              <td>{doc.subject}</td>
            </tr>
          );
        })
      }
    
    </tbody>
</table>
    </div>
  )
}

export default Incoming;
