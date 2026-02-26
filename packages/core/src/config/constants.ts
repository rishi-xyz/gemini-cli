/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FileFilteringOptions {
  respectGitIgnore: boolean;
  respectGeminiIgnore: boolean;
  maxFileCount?: number;
  searchTimeout?: number;
  customIgnoreFilePaths: string[];
}

// File operations default limits
export const DEFAULT_LIMITS = {
  maxFileSizeBytes: 20 * 1024 * 1024,
  maxLinesPerFile: 2000,
  maxLineLength: 2000,
  maxFilesToSearch: 20000,
  maxShellOutputLines: 2000,
} as const;

// File operations max limits
export const MAX_LIMITS = {
  maxFileSizeBytes: 100 * 1024 * 1024,
  maxLinesPerFile: 100000,
  maxLineLength: 10000,
  maxFilesToSearch: 100000,
  maxShellOutputLines: 50000,
} as const;

// For memory files
export const DEFAULT_MEMORY_FILE_FILTERING_OPTIONS: FileFilteringOptions = {
  respectGitIgnore: false,
  respectGeminiIgnore: true,
  maxFileCount: DEFAULT_LIMITS.maxFilesToSearch,
  searchTimeout: 5000,
  customIgnoreFilePaths: [],
};

// For all other files
export const DEFAULT_FILE_FILTERING_OPTIONS: FileFilteringOptions = {
  respectGitIgnore: true,
  respectGeminiIgnore: true,
  maxFileCount: DEFAULT_LIMITS.maxFilesToSearch,
  searchTimeout: 5000,
  customIgnoreFilePaths: [],
};

// Generic exclusion file name
export const GEMINI_IGNORE_FILE_NAME = '.geminiignore';
