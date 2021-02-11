import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { handleLastPhraseToLocal } from "../../utils/utils.js";

import "../../sass/style.scss";

export default function TextAreaForm({ onSubmit, localNewPhrase }) {
  let history = useHistory();

  /*   const defaultText =localNewPhrase.slice(0).pop().phrase; */
  const { register, handleSubmit } = useForm({
    defaultValues: {
      phrase: localNewPhrase,
    },
  });

  const submitHandler = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    onSubmit(data);
    handleLastPhraseToLocal(data);

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
          ref={register({ maxLength: 80 })}
        ></textarea>
      </div>
      <button type="submit" className="create-page__btn btn">
        &#10003;Save
      </button>
    </form>
  );
}
