import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Etrama. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Dimsetrama/"
              className="text-sm font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/_dimsanjaya"
              className="text-sm font-medium hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}