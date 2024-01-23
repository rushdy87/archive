import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InputDate from "../../components/InputDate/InputDate";
import { data } from "../../data/tags";
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
        <div className="search-sidebar">
          <div className="in_out">
            <fieldset>
              <div className="outgoing_radio">
                <input
                  type="radio"
                  id="outgoing"
                  name="incomingOrOutgoing"
                  value="صادر"
                  checked
                />
                <label for="outgoing">صادر</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="incoming"
                  name="incomingOrOutgoing"
                  value="وارد"
                />
                <label for="incoming">وارد</label>
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
                      name={tag.tag}
                      value={tag.id}
                    />
                    <label for={`tag${tag.id}`}>{tag.tag}</label>
                  </div>
                );
              })}
            </fieldset>

            {/* 
            <fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Music</label>
  </div>
</fieldset>
            */}
          </div>
        </div>
      </div>
      <div className="search-result">
        <p>Serch Result</p>
        <p>Serch Result</p>
        <p>Serch Result</p>
        <p>Serch Result</p>
        <p>Serch Result</p>
      </div>
    </div>
  );
};

export default Search;
