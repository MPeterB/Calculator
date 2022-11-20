function Button(props) {
  return (
    <button
        className={props.className}
        value={props.value}
        onClick={props.onClick}
      >
        {props.show}
    </button>
  )
}

export default Button;
