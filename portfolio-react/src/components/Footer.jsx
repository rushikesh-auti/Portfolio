export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center lg:px-8">
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-900">
            Rushikesh Auti
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}