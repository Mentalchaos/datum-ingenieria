
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(p: string) {
  const clean = p.startsWith("/") ? p : `/${p}`;
  return `${BASE_PATH}${clean}`;
}
