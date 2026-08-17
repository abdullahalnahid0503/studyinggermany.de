/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Page =
  | "/"
  | "/germanlanguage"
  | "/premium"
  | "/booking"
  | "/services"
  | "/universities"
  | "/blog"
  | "/about"
  | "/contact"
  | "/privacy"
  | "/terms"
  | "/successstories"
  | "/faq"
  | "/imprint";

interface RouterCtx {
  page: Page;
  navigate: (to: Page) => void;
}

const Ctx = createContext<RouterCtx | null>(null);

function parsePage(path: string): Page {
  const clean = path.replace(/\?.*$/, "").replace(/\/$/, "") || "/";
  const map: Record<string, Page> = {
    "/premium": "/premium",
    "/germanlanguage": "/germanlanguage",
    "/booking": "/booking",
    "/services": "/services",
    "/universities": "/universities",
    "/blog": "/blog",
    "/about": "/about",
    "/contact": "/contact",
    "/privacy": "/privacy",
    "/terms": "/terms",
    "/successstories": "/successstories",
    "/faq": "/faq",
    "/imprint": "/imprint",
  };
  return map[clean] ?? "/";
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>(() =>
    parsePage(window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setPage(parsePage(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: Page) => {
    window.history.pushState({}, "", to);
    setPage(to);
    window.scrollTo({ top: 0 });
  };

  return <Ctx.Provider value={{ page, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useRouter must be used inside RouterProvider");
  return ctx;
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith("/") && !to.startsWith("//")) {
      e.preventDefault();
      if (to.includes("#")) {
        const [path, hash] = to.split("#");
        if (path && path !== window.location.pathname) {
          navigate(path as Page);
          setTimeout(
            () =>
              document
                .getElementById(hash)
                ?.scrollIntoView({ behavior: "smooth" }),
            120,
          );
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(to as Page);
      }
    }
    onClick?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
