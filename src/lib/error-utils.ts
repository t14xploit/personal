
export type ActionResult<T = unknown> = {
  success: boolean;
  error?: string;
  message?: string;
  fieldErrors?: Record<string, string[]>;
  data?: T;
};

export function handleActionError(error: unknown): ActionResult {


  // Handle generic errors
  if (error instanceof Error) {
    return {
      success: false,
      error: error.message,
    };
  }

  // Fallback for unknown errors
  return {
    success: false,
    error: "An unexpected error occurred",
  };
}

export function createSuccessResult<T = unknown>(data?: T, message?: string): ActionResult<T> {
  return {
    success: true,
    data,
    message,
  };
}

export function createErrorResult(error: string, fieldErrors?: Record<string, string[]>): ActionResult {
  return {
    success: false,
    error,
    fieldErrors,
  };
}

// Helper function to convert ActionResult to legacy ActionState format
export function convertToLegacyState(result: ActionResult): {
  message: string;
  error: string;
  fieldErrors: Record<string, string>;
} {
  const fieldErrors: Record<string, string> = {};

  if (result.fieldErrors) {
    Object.entries(result.fieldErrors).forEach(([field, errors]) => {
      if (errors && errors.length > 0) {
        fieldErrors[field] = errors[0];
      }
    });
  }

  return {
    message: result.success ? "Success" : "",
    error: result.error || "",
    fieldErrors,
  };
}
