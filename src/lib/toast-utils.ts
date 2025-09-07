"use client"

import { toast } from "sonner"
import { ActionResult } from "./error-utils"

/**
 * Show a success toast notification
 */
export function showSuccessToast(message: string) {
  toast.success(message)
}

/**
 * Show an error toast notification
 */
export function showErrorToast(message: string) {
  toast.error(message)
}

/**
 * Show a warning toast notification
 */
export function showWarningToast(message: string) {
  toast.warning(message)
}

/**
 * Show an info toast notification
 */
export function showInfoToast(message: string) {
  toast.info(message)
}

/**
 * Handle ActionResult and show appropriate toast
 */
export function handleActionResult<T>(result: ActionResult<T>, successMessage?: string) {
  if (result.success) {
    showSuccessToast(successMessage || result.message || "Operation completed successfully!")
  } else {
    showErrorToast(result.error || "An error occurred")
    
    // If there are field errors, show them as additional error toasts
    if (result.fieldErrors) {
      Object.entries(result.fieldErrors).forEach(([field, errors]) => {
        if (errors && errors.length > 0) {
          showErrorToast(`${field}: ${errors[0]}`)
        }
      })
    }
  }
  
  return result
}

/**
 * Handle form submission with ActionResult and toast notifications
 */
export function handleFormSubmission<T>(
  result: ActionResult<T>,
  options?: {
    successMessage?: string
    onSuccess?: (data: T) => void
    onError?: (error: string) => void
  }
) {
  if (result.success) {
    showSuccessToast(options?.successMessage || result.message || "Form submitted successfully!")
    if (options?.onSuccess && result.data) {
      options.onSuccess(result.data)
    }
  } else {
    const errorMessage = result.error || "Form submission failed"
    showErrorToast(errorMessage)
    
    if (options?.onError) {
      options.onError(errorMessage)
    }
    
    // Show field errors as individual toasts
    if (result.fieldErrors) {
      Object.entries(result.fieldErrors).forEach(([field, errors]) => {
        if (errors && errors.length > 0) {
          showErrorToast(`${field}: ${errors[0]}`)
        }
      })
    }
  }
  
  return result
}
