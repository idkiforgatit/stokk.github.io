import { redirect } from 'next/navigation';

export default function RootPage() {
  // This forces Next.js to stay in "App Router" mode so the API works
  // while immediately showing your original HTML design.
  redirect('/stokk.html');
}
