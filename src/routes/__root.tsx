import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteProvider } from "@/lib/site-context";
import { meta } from "@/lib/content";
import appCss from "../styles.css?url";

const APP_NAME = meta.title.zh;

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&family=Noto+Serif+SC:wght@400;500;600&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: meta.description.zh },
      { name: "theme-color", content: "#050505" },
      { name: "color-scheme", content: "dark" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: FONT_HREF },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="zh-CN" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-void text-paper">
        <PreviewHostBridge />
        <AuthProvider>
          <SiteProvider>
            <div className="grain" aria-hidden="true" />
            <Outlet />
          </SiteProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
