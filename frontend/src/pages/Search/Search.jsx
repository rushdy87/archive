import { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InputDate from "../../components/InputDate/InputDate";
import { data } from "../../data/tags";
import { data as ingoingData } from "../../data/ingoing";
import { data as outgoingData } from "../../data/outgoing";
import "./Search.scss";
import DocumentsTable from "../../components/DocumentsTable/DocumentsTable";

const allDocs = [...ingoingData, ...outgoingData];

const Search = () => {
  const [documents, setDocuments] = useState(allDocs);
  const [filterFields, setFilterFields] = useState({
    type: "",
    tags: [],
  });

  const handleFilterFiledsChange = (event) => {
    if (event.target.name === "tags") {
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

  useEffect(() => {
    let docs = [...allDocs];
    if (filterFields.type) {
      docs = allDocs.filter((doc) => doc.type === filterFields.type);
    }

    // the code in the commint don't work!!
    // if (filterFields.tags.length > 0) {
    //   docs = docs.filter((doc) => {
    //     for (let i = 0; i < doc.tags.length; i++) {
    //       if (filterFields.tags.includes(doc.tags[i])) return true;
    //       return false;
    //     }
    //   });
    // }

    setDocuments(docs);
  }, [filterFields]);

  return (
    <div className="search-container">
      <div className="search-nav">
        <div className="search-header">
          <form>
            <div className="input-fields">
              <Input
                type="text"
                label="الموضوع"
                id="subject"
                handleChange={(e) => console.log(e.target.value)}
                value=""
              />
              <Input
                type="text"
                label="الجهة"
                id="correspondent"
                handleChange={(e) => console.log(e.target.value)}
                value=""
              />
              <Input
                type="text"
                label="صاحب العلاقة"
                id="employee"
                handleChange={(e) => console.log(e.target.value)}
                value=""
              />
            </div>
            <div className="input-fields">
              <div className="date-inputs">
                <span>للفترة</span>
                <InputDate
                  id="from"
                  label="من"
                  handleChange={() => null}
                  value=""
                />
                <InputDate
                  id="to"
                  label="إلى"
                  handleChange={() => null}
                  value=""
                />
              </div>

              <div className="search-btns">
                <Button
                  className="button primary"
                  type="submit"
                  onClick={() => {}}
                >
                  بحث
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="search-sidebar">
          <div className="search-filter-fields">
            <div className="in_out">
              <fieldset>
                <div className="outgoing_radio">
                  <input
                    type="radio"
                    id="outgoing"
                    name="type"
                    value="outgoing"
                    onChange={handleFilterFiledsChange}
                    checked={filterFields.type === "outgoing"}
                  />
                  <label htmlFor="outgoing">صادر</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="ingoing"
                    name="type"
                    value="ingoing"
                    onChange={handleFilterFiledsChange}
                    checked={filterFields.type === "ingoing"}
                  />
                  <label htmlFor="ingoing">وارد</label>
                </div>
              </fieldset>
            </div>
            <div className="search-sidebar_tags">
              <fieldset>
                {data.map((tag) => {
                  return (
                    <div key={tag.id}>
                      <input
                        type="checkbox"
                        id={`tag${tag.id}`}
                        name="tags"
                        value={tag.tag}
                        onChange={handleFilterFiledsChange}
                      />
                      <label htmlFor={`tag${tag.id}`}>{tag.tag}</label>
                    </div>
                  );
                })}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="search-result">
        <DocumentsTable documents={documents} />
      </div>
    </div>
  );
};

export default Search;
