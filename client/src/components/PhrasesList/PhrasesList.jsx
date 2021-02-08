import React from "react";
import "../../sass/style.scss";
import Moment from "react-moment";
import "moment-timezone";

function PhrasesList({ allLocalPhrases, searchResults }) {
  if (!allLocalPhrases) {
    <h3 style={{ textAlign: "center" }}>Data not found</h3>;
  } else {
    return (
      <div className="phrases-list">
        {searchResults?.map((phrase) => (
          <div key={phrase._id} className="phrases-list__item">
            <div className="phrases-list__date">
              <p>
                <Moment format="MMM">{phrase.createdAt}</Moment>
              </p>
              <p>
                <Moment className="phrases-list__day" format="Do">
                  {phrase.createdAt}
                </Moment>
              </p>
              <p>
                <Moment format="YYYY">{phrase.createdAt}</Moment>
              </p>
            </div>

            <p className="phrases-list__text">{phrase.phrase}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PhrasesList;
