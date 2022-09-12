interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <h1>Hello NLW</h1>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Send 3"/>
    </>
  )
}

export default App