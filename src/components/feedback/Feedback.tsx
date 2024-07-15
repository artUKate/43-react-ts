import { useState } from 'react';
import MyButton from "../myButton/MyButton";

export default function Feedback() {
  const [like, setLike] = useState<number>(5)
  const [dislike, setDislike] = useState<number>(0)

  const handleLike = ():void => {
    // setLike(prev => prev + 2)
    setLike(prev => prev + 1)
  }

  const handleDisLike = ():void => {
    setDislike(prev => prev + 1)
  }

  const handleReset = ():void => {
    setLike(0)
    setDislike(0)
  }

  return (
    <div>
      <div>
        <span>{like}</span>
        <MyButton onClick={handleLike} name={"👍"} />
        <MyButton onClick={handleDisLike} name={"👎"} />
        <span>{dislike}</span>
      </div>
      <div>
        <MyButton onClick={handleReset} name={"Reset Results"} />
      </div>
    </div>
  );
}