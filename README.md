# Bastion Protocol - Domain Investment Platform

A production-ready Next.js 14 Web3 frontend for professional domain investment, built with modern technologies and best practices.

![Bastion Protocol Screenshot](https://github.com/user-attachments/assets/0d143eba-e7fe-4739-a540-58494507d37f)

## ✨ Features

### 🎨 **Professional UI/UX**
- **Modern Design System**: Red/white/dark theme with smooth transitions
- **Responsive Layout**: Mobile-first approach with Tailwind CSS v4
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance**: Optimized for Core Web Vitals

### 🔗 **Web3 Integration**
- **Multi-chain Support**: Ethereum, Polygon, Optimism, Arbitrum, Base
- **Wallet Connection**: RainbowKit with custom theming
- **Type Safety**: Full TypeScript integration with Wagmi v2
- **Real-time Updates**: Live blockchain data synchronization

### 🏢 **Core Platform Features**
- **Dashboard**: Portfolio overview with performance metrics
- **Investment Circles**: Collaborative domain investing
- **Domain Auctions**: Professional bidding interface
- **Portfolio Management**: Advanced tracking and analytics
- **Settings**: Comprehensive user preferences

### 🔧 **Developer Experience**
- **Next.js 14**: Latest App Router with Turbopack
- **TypeScript**: Full type safety and IntelliSense
- **ESLint & Prettier**: Code quality and formatting
- **Error Boundaries**: Graceful error handling
- **SEO Optimized**: Complete metadata and social sharing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bastion-Protocol/domainfi-bastion-ui.git
   cd domainfi-bastion-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

### **Frontend Technologies**
- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety and developer experience
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### **Web3 Stack**
- [Wagmi v2](https://wagmi.sh/) - React hooks for Ethereum
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection library
- [Viem](https://viem.sh/) - TypeScript Ethereum library
- [TanStack Query](https://tanstack.com/query) - Data fetching and caching

### **UI Components**
- [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- [Class Variance Authority](https://cva.style/) - Type-safe component variants
- [Clsx](https://github.com/lukeed/clsx) - Conditional className utility
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes

### **Developer Tools**
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auctions/          # Domain auction interface
│   ├── circles/           # Investment circles management
│   ├── portfolio/         # Portfolio tracking
│   ├── settings/          # User preferences
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage/dashboard
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── layout.tsx        # Page layout wrapper
│   ├── providers.tsx     # App providers (Web3, theme)
│   └── theme-toggle.tsx  # Dark/light mode toggle
├── hooks/                # Custom React hooks
│   ├── use-wallet.ts     # Web3 wallet utilities
│   └── use-storage.ts    # Local/session storage hooks
├── lib/                  # Utility libraries
│   ├── utils.ts          # Common utility functions
│   ├── wagmi.ts          # Web3 configuration
│   └── seo.ts            # SEO metadata helpers
└── types/                # TypeScript type definitions
```

## 🎨 Theme System

The application features a sophisticated theme system with:

- **Light Mode**: Clean white backgrounds with red accents
- **Dark Mode**: Rich dark backgrounds with lighter red accents
- **CSS Variables**: Dynamic theming with custom properties
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Transitions**: 300ms easing for all theme switches

### Theme Colors
```css
Primary Red: #ef4444 (light) / #f87171 (dark)
Success Green: #22c55e
Warning Orange: #f59e0b
Neutral Grays: #f9fafb to #030712
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🌐 Environment Variables

Create a `.env.local` file with these variables:

```env
# Required
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Get a WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Bastion-Protocol/domainfi-bastion-ui)

### Manual Deployment
```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [bastion-protocol.com](https://bastion-protocol.com)
- **Documentation**: [docs.bastion-protocol.com](https://docs.bastion-protocol.com)
- **Twitter**: [@BastionProtocol](https://twitter.com/BastionProtocol)

---

**Built with ❤️ by the Bastion Protocol team**
