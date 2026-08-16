import { useState, useCallback } from 'react';

interface ButtonProps {
  onClick: () => void;
}

function DiceCheck() {
  const [check, setCheck] = useState(0);

  const roll1d20 = useCallback(() => {
    setCheck(Math.floor(Math.random() * 20) + 1);
  }, [setCheck]);

  return (
    <div>
      <Button onClick={roll1d20} />
      <p>Último tiro: {check}</p>
    </div>
  );
}

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Roll 1d20</button>;
}

export default DiceCheck;