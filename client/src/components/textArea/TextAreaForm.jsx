import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "../../sass/style.scss";

export default function TextAreaForm({ onSubmit, lastPhrase }) {
  // const [phrase, setPhrase] = useState("");
  let history = useHistory();
  console.log(lastPhrase?.phrase);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      phrase: lastPhrase?.phrase,
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
    history.push("/home");
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="create-page__phrase">
        <textarea
          id="createPhrase"
          name="phrase"
          className="paragraph"
          rows="2"
          cols="50"
          autoFocus
          defaultValue={lastPhrase}
          ref={register}
        ></textarea>
      </div>
      <button type="submit" className="create-page__btn btn">
        &#10003;Save
      </button>
    </form>
  );
}
