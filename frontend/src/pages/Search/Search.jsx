import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InputDate from "../../components/InputDate/InputDate";
import "./Search.scss";

const Search = () => {
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
        <div className="search-sidebar">search-sidebar</div>
      </div>
      <div className="search-result">search-result</div>
    </div>
  );
};

export default Search;
