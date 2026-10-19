/**
 * 25-Year Sustainable Result Monad Pattern
 * Prevents unhandled exceptions across network boundaries and infrastructure adapters.
 * Conforms to functional error handling standards across Rust (Result<T, E>), Go (value, err), and C# (Result<T>).
 */

export type Result<T, E = Error> =
  | { success: true; data: T; error?: never }
  | { success: false; error: E; data?: never };

export const Result = {
  ok<T>(data: T): Result<T, never> {
    return { success: true, data };
  },

  fail<E>(error: E): Result<never, E> {
    return { success: false, error };
  },

  isOk<T, E>(result: Result<T, E>): result is { success: true; data: T } {
    return result.success;
  },

  isFail<T, E>(result: Result<T, E>): result is { success: false; error: E } {
    return !result.success;
  },

  async fromPromise<T>(promise: Promise<T>, fallbackMessage = 'An unexpected error occurred'): Promise<Result<T, Error>> {
    try {
      const data = await promise;
      return Result.ok(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return Result.fail(err);
      }
      return Result.fail(new Error(typeof err === 'string' ? err : fallbackMessage));
    }
  },
};
