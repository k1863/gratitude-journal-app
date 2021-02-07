import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "../../sass/style.scss";

export default function TextAreaForm({
  onSubmit,
  currentLastPhrase,
  handleLastPhraseToLocal,
  handleSaveDataToLocal,
}) {
  const [text, setText] = useState("");
  // const [phrase, setPhrase] = useState("");
  let history = useHistory();

  /*   const defaultText = currentLastPhrase.slice(0).pop().phrase; */
  const { register, handleSubmit } = useForm({
    defaultValues: {
      phrase: currentLastPhrase,
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
    handleLastPhraseToLocal(data);

    history.push("/home");
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

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
          defaultValue={text}
          ref={register({ max: 84 })}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="create-page__btn btn">
        &#10003;Save
      </button>
    </form>
  );
}
