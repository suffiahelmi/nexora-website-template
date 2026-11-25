import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes safely without style conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats compact metric numbers or currency values for SaaS dashboards.
 */
export function formatMetric(value: number, prefix = "", suffix = ""): string {
  return `${prefix}${value.toLocaleString("en-US")}${suffix}`;
}
