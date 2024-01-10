import { useState } from "react";
import "./Search.css";
import { data } from "../../data/income";
const Search = () => {
  const [searchField, setSearchField] = useState(null);

  const handleChange = (event) => {
    setSearchField({ [event.target.name]: event.target.value });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const findedData = data.filter(
      (record) =>
        record[Object.keys(searchField)[0]].toString() ===
        searchField[Object.keys(searchField)].toString()
    );

    console.log(findedData);
  };

  console.log(searchField);

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="inputs-container">
          <div className="inputs-col_1">
            <div className="input-field">
              <label htmlFor="subject">الموضوع</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="الموضوع"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="document_date">التاريخ</label>
              <input
                type="date"
                id="document_date"
                name="document_date"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="inputs-col_2">
            <div className="input-field">
              <label htmlFor="from">الجهة المرسلة</label>
              <input
                type="text"
                id="from"
                name="from"
                placeholder="الجهة المرسلة"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="search-btn">
              أبحث
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
