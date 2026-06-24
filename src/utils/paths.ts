export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
};

export const stripBase = (pathname: string) => {
  const base = import.meta.env.BASE_URL;

  if (base === "/") {
    return pathname;
  }

  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const baseWithoutTrailingSlash = normalizedBase.slice(0, -1);

  if (pathname === baseWithoutTrailingSlash) {
    return "/";
  }

  if (pathname.startsWith(normalizedBase)) {
    return `/${pathname.slice(normalizedBase.length)}`;
  }

  return pathname;
};
