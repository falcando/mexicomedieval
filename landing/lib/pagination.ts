/** Shared page size for static entity APIs (books, articles, papers, etc.). */
export const ENTITY_PAGE_SIZE = 10;

export function totalPagesFromListLength(length: number): number {
  return Math.max(1, Math.ceil(length / ENTITY_PAGE_SIZE));
}

/** Same as list length when `total` is the count of items in that paginated list. */
export function totalPagesFromTotal(total: number): number {
  return Math.max(1, Math.ceil(total / ENTITY_PAGE_SIZE));
}

/**
 * 1-based page into a full list. Returns null if page is out of range.
 * Empty list yields one page of empty slice for page 1 only.
 */
export function slicePage<T>(items: readonly T[], page: number): T[] | null {
  if (!Number.isInteger(page) || page < 1) {
    return null;
  }
  const totalPages = totalPagesFromListLength(items.length);
  if (page > totalPages) {
    return null;
  }
  const start = (page - 1) * ENTITY_PAGE_SIZE;
  return items.slice(start, start + ENTITY_PAGE_SIZE) as T[];
}

/** Like slicePage but returns [] when page is past that list’s last page (or invalid page). */
export function slicePageOrEmpty<T>(items: readonly T[], page: number): T[] {
  if (!Number.isInteger(page) || page < 1) {
    return [];
  }
  const totalPages = totalPagesFromListLength(items.length);
  if (page > totalPages) {
    return [];
  }
  const start = (page - 1) * ENTITY_PAGE_SIZE;
  return items.slice(start, start + ENTITY_PAGE_SIZE) as T[];
}
