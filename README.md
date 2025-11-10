# Shaishav Kayastha - Portfolio Website

A professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Responsive design with modern UI
- ✅ SEO optimized with metadata
- ✅ Contact form with email integration (Resend)
- ✅ Dynamic sitemap and robots.txt
- ✅ Custom 404 page
- ✅ CV download functionality
- ✅ Social media integration
- ✅ Multiple pages: Home, About, Experience, Expertise, Education, Achievements, Contact

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/HARVINDER-FSD/shaishav-kayastha-portfolio.git
cd shaishav-kayastha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key_here
EMAIL_TO=your_email@example.com
EMAIL_FROM=onboarding@resend.dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key for email functionality | Yes |
| `EMAIL_TO` | Email address to receive contact form submissions | Yes |
| `EMAIL_FROM` | Sender email address (must be verified in Resend) | Yes |

### Getting Resend API Key:
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Add it to your `.env.local` file

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Environment Variables in Vercel:
- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`
- Redeploy if needed

## 📄 License

© 2025 Shaishav Kayastha. All rights reserved.

## 👤 Author

**Shaishav Kayastha**
- LinkedIn: [Shaishav Kayastha](https://www.linkedin.com/in/shaishav-kayastha)
- Instagram: [@shaishav.edupreneur](https://www.instagram.com/shaishav.edupreneur)
- Email: shaishav.kayastha@gmail.com
