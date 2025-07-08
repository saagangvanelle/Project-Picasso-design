export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} MON ENTREPRISE — Tous droits réservés.
      </div>
    </footer>
  );
}
