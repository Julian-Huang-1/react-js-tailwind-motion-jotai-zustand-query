import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex flex-row">
      <motion.div
        className="flex h-100 w-md bg-red-50"
        animate={{ x, y, rotate }}
        transition={{ type: "spring" }}
      />
      <div className="z-999 flex flex-1 flex-col justify-center">
        <div className="item-center flex flex-row justify-end gap-2">
          <span>x</span>
          <input
            className="w-lg"
            type="range"
            min="0"
            max="1000"
            value={x}
            onChange={(e) => {
              setX(Number(e.target.value));
            }}
          />
        </div>
        <div className="item-center flex flex-row justify-end gap-2">
          <span>y</span>
          <input
            className="w-lg"
            type="range"
            min="0"
            max="1000"
            value={y}
            onChange={(e) => {
              setY(Number(e.target.value));
            }}
          />
        </div>
        <div className="item-center flex flex-row justify-end gap-2">
          <span>rotate</span>
          <input
            className="w-lg"
            type="range"
            min="0"
            max="1000"
            value={rotate}
            onChange={(e) => {
              setRotate(Number(e.target.value));
            }}
            min={-180}
            max={180}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
