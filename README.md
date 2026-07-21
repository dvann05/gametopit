# GameTopit - Aplikasi Topup Games Terlengkap

Website topup games dengan desain modern, production-ready, dan fitur lengkap.

## 🎮 Fitur Utama

- ✅ **Katalog Game Lengkap** - Support berbagai game dengan berbagai denominasi
- ✅ **Sistem Pembayaran** - E-wallet, transfer bank, dan metode pembayaran lainnya
- ✅ **User Authentication** - Registrasi, login, dan profile management
- ✅ **Admin Dashboard** - Kelola produk, transaksi, dan pengguna
- ✅ **Sistem Review & Rating** - User dapat memberikan review untuk setiap produk
- ✅ **Real-time Inventory** - Monitoring stok produk secara real-time
- ✅ **Responsive Design** - Optimal untuk desktop, tablet, dan mobile
- ✅ **Dark Mode** - Dukungan tema gelap

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Axios
- **UI Components**: React Icons
- **Data Visualization**: Recharts
- **Notifications**: React Hot Toast

## 📁 Struktur Proyek

```
gametopit/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   │   ├── common/
│   │   ├── layout/
│   │   ├── game/
│   │   ├── auth/
│   │   └── admin/
│   ├── pages/              # API routes
│   ├── lib/                # Utility functions
│   ├── store/              # Zustand stores
│   ├── types/              # TypeScript types
│   ├── data/               # Mock data
│   ├── hooks/              # Custom hooks
│   └── styles/             # Global styles
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/dvann05/gametopit.git
cd gametopit

# Install dependencies
npm install
# atau
yarn install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## 🔧 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Run production server
npm start

# Linting
npm run lint

# Format code
npm run format
```

## 📊 Mock Data

Aplikasi menggunakan mock data untuk:
- Games dan kategori
- Users dan authentication
- Transactions
- Reviews & ratings
- Products dan denominasi

Data disimpan di `src/data/` dan dapat dimodifikasi sesuai kebutuhan.

## 🔐 Authentication

Menggunakan sistem mock authentication dengan:
- JWT token simulation
- Local storage untuk session
- Protected routes
- Role-based access control (User & Admin)

## 💳 Payment Integration

Payment gateway siap diintegrasikan:
- Stripe
- Midtrans
- PayPal
- Local payment methods

## 📱 Responsive & Accessibility

- Mobile-first design
- Accessibility standards (WCAG 2.1)
- SEO optimized
- Performance optimized

## 📄 Environment Variables

Buat file `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=GameTopit
NEXT_PUBLIC_APP_DESCRIPTION=Topup Games Terlengkap dengan Desain Modern
```

## 🐛 Development

### Branch Convention
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches

### Commit Messages
```
feat: add new feature
fix: fix bug
docs: update documentation
style: code style changes
refactor: refactor code
test: add tests
perf: performance improvements
```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Docker
```bash
docker build -t gametopit .
docker run -p 3000:3000 gametopit
```

## 📝 License

MIT License - feel free to use this project!

## 🤝 Contributing

Contributions are welcome! Silakan buat pull request dengan:
1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

Untuk pertanyaan atau issues, silakan buka issue di repository ini.

---

Made with ❤️ by dvann05
