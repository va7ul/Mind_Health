type DelayOptions =
  | { timeout: number; shouldFail?: boolean }
  | { timeout?: number; shouldFail: boolean };

export function delayed<T>(
  data: T,
  options: DelayOptions = { shouldFail: false, timeout: 1500 }
) {
  const { shouldFail, timeout } = options;
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(data) : resolve(data)), timeout);
  });
}

// Код для виклику:

// import { delayed } from './delay';

// export const getAllPsyhologists = () => {
//   return delayed(psyhologists, { timeout: 1000, shouldFail: false });
// };
