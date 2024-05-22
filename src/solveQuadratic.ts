export function solveQuadratic(a: number, b: number, c: number): number[] {
  const roots: number[] = [];
  if (a === 0) {
    throw new Error("This is not a quadratic equation.");
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    // 두 개의 서로 다른 실수 해
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1);
    roots.push(root2);
  } else if (discriminant === 0) {
    // 하나의 실수 해
    const root = -b / (2 * a);
    roots.push(root);
  } else {
    // 실수 해가 없음
    console.warn("실수 해 없음");
  }
  return roots;
}
