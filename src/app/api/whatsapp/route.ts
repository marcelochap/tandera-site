import { NextRequest, NextResponse } from "next/server";

/**
 * Rota de redirecionamento para WhatsApp.
 * O número fica apenas em WHATSAPP_NUMBER (variável de ambiente server-side),
 * nunca exposto no bundle do cliente ou no HTML da página.
 */
export async function GET(request: NextRequest) {
  const number = process.env.WHATSAPP_NUMBER;

  if (!number) {
    return NextResponse.json(
      { error: "WhatsApp não configurado." },
      { status: 503 }
    );
  }

  const text = request.nextUrl.searchParams.get("text") ?? "";
  const waUrl = text
    ? `https://wa.me/${number}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${number}`;

  return NextResponse.redirect(waUrl);
}
