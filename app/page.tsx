import { redirect } from "next/navigation";

import { fallbackLanguage } from "@/lib/i18n/config";

export default function RootPage() {
  redirect(`/${fallbackLanguage}`);
}
