import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import categoryConfigs from '../config/categoryConfigs'
import { ICategoryConfig } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryInfo(category: string): ICategoryConfig {
  return categoryConfigs.find(info => info.category === category) || {} as ICategoryConfig
}
