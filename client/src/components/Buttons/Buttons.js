import './Buttons.css';
import useButtons from '../../hooks/useButtons';
import useMemory from '../../hooks/useMemory';

function Buttons(props) {
  const {
    numbers,
    zero,
    point,
    operations,
    clear,
    remove,
    equal
  } = useButtons(
    props.inputResult,
    props.setInputResult,
    props.setCalculation,
    props.setMessage,
    props.setShowMessage,
    );

  const {
    saveIntoMemory,
    readMemory,
  } = useMemory(
    props.calculation,
    props.setCalculation,
    props.inputResult,
    props.setInputResult,
    props.setMessage,
    props.setShowMessage,
  );

  return (
    <div className='buttons'>
      <button
        className='one'
        type='button'
        value={'1'}
        onClick={numbers}
      >
        1
      </button>
      <button
        className='two'
        type='button'
        value={'2'}
        onClick={numbers}
      >
        2
      </button>
      <button
        className='three'
        type='button'
        value={'3'}
        onClick={numbers}
      >
        3
      </button>
      <button
        className='four'
        type='button'
        value={'4'}
        onClick={numbers}
      >
        4
      </button>
      <button
        className='five'
        type='button'
        value={'5'}
        onClick={numbers}
      >
        5
      </button>
      <button
        className='six'
        type='button'
        value={'6'}
        onClick={numbers}
      >
        6
      </button>
      <button
        className='seven'
        type='button'
        value={'7'}
        onClick={numbers}
      >
        7
      </button>
      <button
        className='eight'
        type='button'
        value={'8'}
        onClick={numbers}
      >
        8
      </button>
      <button
        className='nine'
        type='button'
        value={'9'}
        onClick={numbers}
      >
        9
      </button>
      <button
        className='zeroButton'
        type='button'
        value={'0'}
        onClick={zero}
      >
        0
      </button>
      <button
        className='point'
        type='button'
        value={'.'}
        onClick={point}
      >
        .
      </button>
      <button
        className='clear'
        type='button'
        value={'clear'}
        onClick={clear}
      >
        CA
      </button>
      <button
        className='plus'
        type='button'
        value={'+'}
        onClick={operations}
      >
        +
      </button>
      <button
        className='minus'
        type='button'
        value={'-'}
        onClick={operations}
      >
        -
      </button>
      <button
        className='multiplyButton'
        type='button'
        value={'*'}
        onClick={operations}
      >
        x
      </button>
      <button
        className='divide'
        type='button'
        value={'/'}
        onClick={operations}
      >
        /
      </button>
      <button
        className='equal'
        type='button'
        value={'='}
        onClick={equal}
      >
        =
      </button>
      <button
        className='removeLast'
        type='button'
        value={'removeLast'}
        onClick={remove}
      >
        DEL
      </button>
      <button
        className='save'
        type='button'
        onClick={saveIntoMemory}
      >
        M+
      </button>
      <button
        className='read'
        type='button'
        onClick={readMemory}
      >
        M
      </button>
    </div>
  );
}

export default Buttons;
