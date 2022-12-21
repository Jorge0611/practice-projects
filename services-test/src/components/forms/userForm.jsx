import { TextInput } from "./inputs/textInput.jsx";
import { TextArea } from "./inputs/textArea.jsx";
import { useRef } from "react";

export function UserForm({ onSubmit, defaultValues }) {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextInput title={"Name"} name={"name"} required />
        <TextInput title={"Age"} name={"age"} type={"number"} required />
        <TextArea title={"Address"} name={"address"} required />
        <button type={"submit"}>Submit</button>
      </form>
    </>
  );
}
