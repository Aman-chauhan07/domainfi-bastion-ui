import Link from "next/link";
import { Github, Twitter, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl">Bastion Protocol</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional Web3 domain investment platform enabling collaborative investing and portfolio management.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/bastionprotocol"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/bastion-protocol"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://bastionprotocol.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@bastionprotocol.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold mb-4">Platform</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/circles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Investment Circles
                    </Link>
                  </li>
                  <li>
                    <Link href="/auctions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Domain Auctions
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Bastion Protocol. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            Built with Next.js, Tailwind CSS, and Wagmi
          </p>
        </div>
      </div>
    </footer>
  );
}