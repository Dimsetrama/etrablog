import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright Notice */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Etrama. All Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Dimsetrama/" // Replace with your GitHub URL
              className="text-sm font-medium hover:underline"
            >
              GitHub
            </a>
            <a
              href="#" // Replace with your Twitter/X URL
              className="text-sm font-medium hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/_dimsanjaya" // Replace with your LinkedIn URL
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

export default Footer;
