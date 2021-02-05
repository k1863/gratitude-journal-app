import React from "react";
import { useForm } from "react-hook-form";
import "../../sass/style.scss";

export default function TextAreaForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  const submitHandler = handleSubmit((data) => {
    console.log(data);
    onSubmit(data);
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
          ref={register}
        ></textarea>
      </div>
      <button type="submit" className="create-page__btn btn">
        &#10003;Save
      </button>
    </form>
  );
}
