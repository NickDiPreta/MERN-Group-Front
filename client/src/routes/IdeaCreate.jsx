import React, { useState } from "react";
// import axios from "axios";
// import ideasApi from '../../apiConfig'
import IdeaForm from "./IdeaForm";
import Layout from "./Layout";
import './IdeaCreate.css';

const IdeaCreate = (props) => {
  //   console.log('IdeaCreate props', props)
  // const [input, setInput] = useState({ title: "", desc: ""});
  // const [idea, setIdea] = useState(null);
  // const handleChange = (event) => {
  //   console.log("event", event.target.name, event.target.value);
  //   setInput({
  //     ...input,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("handleSubmit");
  //   console.log(input)
  //   axios({
  //     url: `${ideasApi}/add`,
  //     method: "POST",
  //     data: input,
  //   })
  //     .then((res) => {
  //       console.log(res)
  //         setIdea({ createdItem: res.data.idea })
  //         props.history.push('/songs')
  //       })
  //     .catch(console.error);
  // };
  return (
    <>
    <div className="Post-submit-container">
      <div className="SubmitIconContainer">
        <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1595276128/light-bulb-icon-cartoon-isolated-black-and-white-vector-25740587_2_rcuki4.png" alt="Lightbulb Image"/>
      </div>
      <IdeaForm
        // item={input}
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
        cancelPath="/"
      />
      </div>
    </>
  );
};
export default IdeaCreate;