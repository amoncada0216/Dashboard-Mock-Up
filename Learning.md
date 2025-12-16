[ Browser / React ]
        ↓
[ main.tsx ]   ← React bootstrap (ReactDOM, Router, StrictMode)
        ↓
[ App.tsx ]    ← App composition root
        ↓
[ App Providers (global state) ]
        ↓
[ App Layout (UI skeleton) ]
        ↓
[ Pages / Routes ]
        ↓
[ Components ]


src/
│
├── main.tsx
├── App.tsx
│
├── providers/
│   └── AppProviders.tsx
│
├── layout/
│   └── AppLayout.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   └── NotFound.tsx
│
├── components/
│   ├── Navbar.tsx
│   └── AppSidebar.tsx
│
└── routes/
    └── AppRoutes.tsx

❌ Do NOT:

Put Home in components/

Render Home directly in App.tsx

Mix routing logic into Navbar or Sidebar

✅ DO:

Pages = pages/

Routing = routes/

Layout = layout/

Composition = App.tsx