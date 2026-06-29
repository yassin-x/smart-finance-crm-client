import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  const isDashboardRoot = pathname === "/dashboard";
  const isDashboardPanel = pathname.startsWith("/dashboard/admin");

  if (!token && isDashboardPanel) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (token && isDashboardRoot) {
    return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
