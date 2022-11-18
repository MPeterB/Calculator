import './Screen.css';

function Screen(props) {
  return (
    <div className='screen'>
      <div>
        <span>calculations:</span>
        <span>{props.calculation}</span>
      </div>
      <div>
        <span>input:</span>
        <span>{props.input}</span>
      </div>
    </div>
  );
}

export default Screen;
