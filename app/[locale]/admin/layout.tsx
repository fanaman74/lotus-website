import { cookies } from 'next/headers';
import { verifyAdminSession } from '@/lib/admin-auth';
import AdminNav from './AdminNav';

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('lotus_admin_token')?.value;
  const isAuthenticated = token ? await verifyAdminSession(token) : false;

  // If not authenticated, render children without nav (login page renders standalone)
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-bg">
      <AdminNav locale={locale} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
