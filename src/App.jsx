import React,{useState} from 'react'

const App = () => {

function TextArea () {
  const [input, setInput]=useState("");
  const [warning, setWarning]=useState(false);

  const Limit=50;

  const handleInputChange = (e)=>{
    const value=e.taget.value;
  
    setInput(value);
    if(value.length>Limit) 
      {
        setWarning(true);
    }
    else{
      setWarning(false);
    }
  };
  return (
    <div style={{
      maxWidth: "300px",
      margin: "0"
    }}>
      <textarea
       value={input}
       onChange={handleInputChange}
       style={{
        width: "100%",
        border : warning ? "20px solid blue" : "30px solid red",
        borderRadius: "none",
        padding:"5px",
       }} 
       
       id="text"/>
      <div style={{
        marginTop: "30px",
        color: warning ? "yellow" : "green",
      }}>
       {
        warning ? (
          <strong>warning :character limit is exceeded</strong>
        ): (
          `${input.length}/${Limit} characters`
        )
       }
      </div>
    </div>
  );
}
  
}
 

export default App