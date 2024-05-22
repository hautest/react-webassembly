import { useEffect } from "react";
import "./App.css";
import { matrixMultiply } from "./matrixMultiply";
import init, { matrix_multiply } from "./webassembly/webassembly";

function App() {
  useEffect(() => {
    const initWasm = async () => {
      await init();
      const n = 100; // 행렬 크기
      const a = new Float64Array(n * n).fill(1.0); // 예제 행렬 데이터
      const b = new Float64Array(n * n).fill(1.0); // 예제 행렬 데이터

      console.time("wasm matrix multiply");
      const wasmResult = matrix_multiply(a, b, n);
      console.timeEnd("wasm matrix multiply");
      console.log("WASM result", wasmResult.slice(0, 10)); // 결과의 일부만 출력

      console.time("js matrix multiply");
      const jsResult = matrixMultiply(a, b, n);
      console.timeEnd("js matrix multiply");
      console.log("JS result", jsResult.slice(0, 10)); // 결과의 일부만 출력
    };
    initWasm();
  }, []);

  return (
    <div>
      <h1>WebAssembly vs JavaScript Matrix Multiplication</h1>
    </div>
  );
}

export default App;
