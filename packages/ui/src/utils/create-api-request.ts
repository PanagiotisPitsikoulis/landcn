import { ensureError } from "./error";

/**
 * Wraps an API function to handle errors and success/failure cases.
 * @param apiFunction - The API function to wrap.
 * @param onSuccess - Optional callback to execute on successful completion of the API function.
 * @param onError - Optional callback to execute on error.
 * @param shouldRetryOnError - Optional flag to retry the request on error.
 * @param shouldRethrowError - Optional flag to rethrow the error.
 * @returns A function that wraps the API function and preserves its return value.
 */
export function createApiRequest<T extends (...args: any[]) => Promise<any>>(
  apiFunction: T,
  onSuccess?: (data: Awaited<ReturnType<T>>) => void,
  onError?: (error: Error) => void,
  shouldRetryOnError = false,
  shouldRethrowError = false
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  return async function (
    ...args: Parameters<T>
  ): Promise<Awaited<ReturnType<T>>> {
    let retries = shouldRetryOnError ? 1 : 0;

    while (true) {
      try {
        const data = await apiFunction(...args);
        if (onSuccess) {
          onSuccess(data);
        }
        return data;
      } catch (error) {
        const ensuredError = ensureError(error);

        if (onError) {
          onError(ensuredError);
        } else {
          console.error("Unhandled API error:", ensuredError);
        }

        if (retries > 0) {
          retries--;
          continue;
        }

        if (shouldRethrowError) {
          throw ensuredError;
        }
        return null as Awaited<ReturnType<T>>;
      }
    }
  };
}
