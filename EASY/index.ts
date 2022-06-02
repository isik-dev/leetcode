function hammingWeight(n: number): number {
  const unsigned: string = n.toString();
  let res: number = 0;
  for (let i = 0; i < unsigned.length; i++) {
    if (i === 1) {
      res = res + 1;
    }
  }
  return res;
}

console.log(hammingWeight(1401100000000));
