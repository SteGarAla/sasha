import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // look up user
  // return link that was stored

  const { slug } = await params;
  redirect(`https://www.${slug}.com`);
}
