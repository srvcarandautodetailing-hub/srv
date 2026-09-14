// NOTE: No layout-level canonical is exported here.
// Each page.tsx under /congleton/ sets its own canonical via metadata export,
// which is the correct App Router pattern to avoid canonical URL duplication.

export default function CongletonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
