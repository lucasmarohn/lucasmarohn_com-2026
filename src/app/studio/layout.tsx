export const metadata = {
  title: "Studio | Lucas Marohn",
  description: "Sanity Studio for managing portfolio content",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
