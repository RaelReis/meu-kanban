import Link from "next/link";

export default function Login() {
  return (
    <main className="h-screen bg-primary p-14 relative">
      <div className="flex items-center gap-x-7">
        <img src="/logo.svg" alt="Kanban logo" />
        <h1 className="text-white text-5xl font-bold">Kanban</h1>
      </div>
      <Link href="dashboard" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white rounded-lg bg-primary duration-300 border-2 border-white py-3 px-6 hover:text-primary hover:bg-white hover:border-primary">
        Continuar com o google
      </Link>
    </main>
  );
}
