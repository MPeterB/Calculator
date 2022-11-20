import './Buttons.css';
import Button from '../Button/Button';
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
      <Button className={'one'} value={'1'} onClick={numbers} show={'1'}/>
      <Button className={'two'} value={'2'} onClick={numbers} show={'2'}/>
      <Button className={'three'} value={'3'} onClick={numbers} show={'3'}/>
      <Button className={'four'} value={'4'} onClick={numbers} show={'4'}/>
      <Button className={'five'} value={'5'} onClick={numbers} show={'5'}/>
      <Button className={'six'} value={'6'} onClick={numbers} show={'6'}/>
      <Button className={'seven'} value={'7'} onClick={numbers} show={'7'}/>
      <Button className={'eight'} value={'8'} onClick={numbers} show={'8'}/>
      <Button className={'nine'} value={'9'} onClick={numbers} show={'9'}/>
      <Button className={'zeroButton'} value={'0'} onClick={zero} show={'0'}/>
      <Button className={'point'} value={'.'} onClick={point} show={'.'}/>
      <Button className={'clear'} value={'clear'} onClick={clear} show={'CA'}/>
      <Button className={'plus'} value={'+'} onClick={operations} show={'+'}/>
      <Button className={'minus'} value={'-'} onClick={operations} show={'-'}/>
      <Button className={'multiplyButton'} value={'*'} onClick={operations} show={'x'}/>
      <Button className={'divide'} value={'/'} onClick={operations} show={'/'}/>
      <Button className={'equal'} value={'='} onClick={equal} show={'='}/>
      <Button className={'removeLast'} value={'removeLast'} onClick={remove} show={'DEL'}/>
      <Button className={'save'} value={'save'} onClick={saveIntoMemory} show={'M+'}/>
      <Button className={'read'} value={'read'} onClick={readMemory} show={'M'}/>
    </div>
  );
}

export default Buttons;
