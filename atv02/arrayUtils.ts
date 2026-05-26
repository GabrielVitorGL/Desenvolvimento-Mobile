// unique([1,2,2]) → [1,2]
const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

// groupBy([{tipo:'A'},{tipo:'B'}],'tipo') → {A:[…], B:[…]}
const groupBy = <T, K extends keyof T>(arr: T[], key: K) =>
  arr.reduce((acc, obj) => {
    let k = String(obj[key]);
    (acc[k] = acc[k] || []).push(obj);
    return acc;
  }, {} as Record<string, T[]>);

// sumBy([{valor:10},{valor:5}], 'valor') → 15
const sumBy = <T, K extends keyof T>(arr: T[], key: K) =>
  arr.reduce((total, obj) => {
    let val = obj[key] as number | undefined;
    return total + (val ?? 0);
  }, 0);

export = { unique, groupBy, sumBy };
