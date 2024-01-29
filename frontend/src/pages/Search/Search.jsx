import { useEffect, useState } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import InputDate from '../../components/InputDate/InputDate';
import { data } from '../../data/tags';
import { data as ingoingData } from '../../data/ingoing';
import { data as outgoingData } from '../../data/outgoing';
import './Search.scss';
import DocumentsTable from '../../components/DocumentsTable/DocumentsTable';

const allDocs = [...ingoingData, ...outgoingData];

const Search = () => {
  const [terms, setTerms] = useState({
    subject: '',
    correspondent: '',
    employee: '',
    from: '',
    to: '',
  });
  const [documents, setDocuments] = useState(allDocs);
  const [filterFields, setFilterFields] = useState({
    type: '',
    tags: [],
  });

  const handleFilterFiledsChange = (event) => {
    if (event.target.name === 'tags') {
      setFilterFields((prev) => ({
        ...prev,
        tags: prev.tags.includes(event.target.value)
          ? prev.tags.filter((t) => t !== event.target.value)
          : [...prev.tags, event.target.value],
      }));
    } else {
      setFilterFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleSearchTermChange = (event) => {
    setTerms((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // need to  re-write
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const updatedDocs = documents.filter((doc) => {
      let flag = 0;
      for (const key in doc) {
        if (doc[key] === terms[key]) flag++;
      }
      return flag > 0;
    });
    setDocuments(updatedDocs);
  };

  // The search functionallty need to re-write!
  useEffect(() => {
    let docs;
    if (filterFields.type === 'outgoing' || filterFields.type === 'ingoing') {
      docs = allDocs.filter((doc) => doc.type === filterFields.type);
    } else {
      docs = [...allDocs];
    }
    setDocuments(docs);
  }, [filterFields]);

  useEffect(() => {
    if (filterFields.tags.length > 0) {
      const docs = documents.filter((d) => {
        return d.tags.some((tag) => filterFields.tags.includes(tag));
      });
      setDocuments(docs);
    }
  }, [filterFields]);

  return (
    <div className='search-container'>
      <div className='search-nav'>
        <div className='search-header'>
          <form onSubmit={handleSearchSubmit}>
            <div className='input-fields'>
              <Input
                type='text'
                label='الموضوع'
                id='subject'
                name='subject'
                handleChange={handleSearchTermChange}
                value={terms.subject}
              />
              <Input
                type='text'
                label='الجهة'
                id='correspondent'
                name='correspondent'
                handleChange={handleSearchTermChange}
                value={terms.correspondent}
              />
              <Input
                type='text'
                label='صاحب العلاقة'
                id='employee'
                name='employee'
                handleChange={handleSearchTermChange}
                value={terms.employee}
              />
            </div>
            <div className='input-fields'>
              <div className='date-inputs'>
                <span>للفترة</span>
                <InputDate
                  id='from'
                  name='from'
                  label='من'
                  handleChange={handleSearchTermChange}
                  value={terms.from}
                />
                <InputDate
                  id='to'
                  name='to'
                  label='إلى'
                  handleChange={handleSearchTermChange}
                  value={terms.to}
                />
              </div>

              <div className='search-btns'>
                <Button
                  className='button primary'
                  type='submit'
                  onClick={() => {}}
                >
                  بحث
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className='search-sidebar'>
          <div className='search-sidebar_wrapper'>
            <div className='search-sidebar_in_out'>
              <span className='search-filter_head_label'>الصادر والوارد</span>
              <div className='outgoing_radio'>
                <input
                  type='radio'
                  id='outgoing'
                  name='type'
                  value='outgoing'
                  onChange={handleFilterFiledsChange}
                  checked={filterFields.type === 'outgoing'}
                />
                <label htmlFor='outgoing'>صادر</label>
              </div>

              <div>
                <input
                  type='radio'
                  id='ingoing'
                  name='type'
                  value='ingoing'
                  onChange={handleFilterFiledsChange}
                  checked={filterFields.type === 'ingoing'}
                />
                <label htmlFor='ingoing'>وارد</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='all'
                  name='type'
                  value='all'
                  onChange={handleFilterFiledsChange}
                  checked={filterFields.type === 'all'}
                />
                <label htmlFor='all'>الجميع</label>
              </div>
            </div>
            <div className='search-sidebar_tags'>
              <span className='search-filter_head_label'>Tags</span>
              {data.map((tag) => {
                return (
                  <div key={tag.id}>
                    <input
                      type='checkbox'
                      id={`tag${tag.id}`}
                      name='tags'
                      value={tag.tag}
                      onChange={handleFilterFiledsChange}
                    />
                    <label htmlFor={`tag${tag.id}`}>{tag.tag}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='search-result'>
        <DocumentsTable documents={documents} />
      </div>
    </div>
  );
};

export default Search;
