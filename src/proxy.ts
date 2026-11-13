import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, isValidSessionToken } from "@/lib/session";

const OLD_HOST = "zubaidasite1.vercel.app";
const NEW_ORIGIN = "https://zubaidaambreen.com";
// Search Console verification file for the OLD property — it must stay
// reachable on the old host so the old property remains verified.
const VERIFICATION_FILE = "/google1c3e9d92a53b6b21.html";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Domain move: permanently redirect every page on the old vercel.app
  // host to the same path on the new custom domain (required for the
  // Google Search Console Change of Address).
  if (
    request.headers.get("host") === OLD_HOST &&
    pathname !== VERIFICATION_FILE
  ) {
    const target = new URL(pathname + request.nextUrl.search, NEW_ORIGIN);
    return NextResponse.redirect(target, 301);
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const authenticated = isValidSessionToken(
      request.cookies.get(COOKIE_NAME)?.value,
    );

    if (pathname === "/admin/login") {
      if (authenticated) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return NextResponse.next();
    }

    if (!authenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
