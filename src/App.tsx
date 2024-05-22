import { useEffect } from "react";
import "./App.css";
import { matrixMultiply } from "./matrixMultiply";
import init, { matrix_multiply } from "./webassembly/webassembly";

const n = 2000; // 행렬 크기
const a = new Float64Array(n * n).fill(1.0); // 예제 행렬 데이터
const b = new Float64Array(n * n).fill(1.0); // 예제 행렬 데이터

function App() {
  useEffect(() => {
    init(); // WebAssembly 모듈 초기화
  }, []);

  return (
    <div>
      <h1>WebAssembly vs JavaScript Matrix Multiplication</h1>
      <button
        onClick={() => {
          console.time("wasm matrix multiply");
          matrix_multiply(a, b, n);
          console.timeEnd("wasm matrix multiply");
        }}
      >
        WebAssembly Check
      </button>
      <button
        onClick={() => {
          console.time("js matrix multiply");
          matrixMultiply(a, b, n);
          console.timeEnd("js matrix multiply");
        }}
      >
        Javascript Check
      </button>
    </div>
  );
}

export default App;
