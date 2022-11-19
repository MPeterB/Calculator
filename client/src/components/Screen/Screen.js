import './Screen.css';

function Screen(props) {
  return (
    <div className='screen'>
      <div className='calculation'>{props.calculation}</div>
      <div className='inputResult'>{props.inputResult}</div>
    </div>
  );
}

export default Screen;
