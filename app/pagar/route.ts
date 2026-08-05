import { NextResponse } from "next/server";
import { HOTMART_CHECKOUT_URLS } from "@/lib/hotmart";

export async function GET(request: Request) {
  const plan = new URL(request.url).searchParams.get("plan");
  const url = plan === "monthly" ? HOTMART_CHECKOUT_URLS.monthly : HOTMART_CHECKOUT_URLS.annual;
  return NextResponse.redirect(url);
}
