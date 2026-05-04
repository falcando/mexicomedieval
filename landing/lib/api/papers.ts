import type {
  AcademicPapersPageResponse,
  PresentationsPageResponse,
} from "@/lib/types/paper";

export async function fetchAcademicPapersPage(
  page: number,
): Promise<AcademicPapersPageResponse> {
  const res = await fetch(`/api/papers/academic/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load academic papers: ${res.status}`);
  }
  return res.json() as Promise<AcademicPapersPageResponse>;
}

export async function fetchPresentationsPage(
  page: number,
): Promise<PresentationsPageResponse> {
  const res = await fetch(`/api/papers/presentations/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load presentations: ${res.status}`);
  }
  return res.json() as Promise<PresentationsPageResponse>;
}
