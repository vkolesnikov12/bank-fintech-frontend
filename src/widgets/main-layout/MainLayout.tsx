import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const primaryNavigation = [
    {
      label: "Главная",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 5h7v7H4V5zm9 0h7v7h-7V5zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"
          />
        </svg>
      ),
      isActive: true,
    },
    {
      label: "Мои счета",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3H3V6zm0 5h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7zm5 3h5v2H8v-2z"
          />
        </svg>
      ),
      isActive: false,
    },
    {
      label: "Переводы",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 7h10v2H7V7zm0 8h10v2H7v-2zm10.4-4.4L14 14l1.4 1.4L21.8 9l-6.4-6.4L14 4l3.4 3.6H7v2h10.4z"
          />
        </svg>
      ),
      isActive: false,
    },
    {
      label: "Карты",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3H3V7zm0 5h18v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5zm3 2h6v2H6v-2z"
          />
        </svg>
      ),
      isActive: false,
    },
    {
      label: "Документы",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 3h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 1v4h4"
          />
        </svg>
      ),
      isActive: false,
    },
  ];

  const systemNavigation = [
    {
      label: "Настройки",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="m12 2 2 2 3-1 2 3 3 1-1 3 1 3-3 1-2 3-3-1-2 2-2-2-3 1-2-3-3-1 1-3-1-3 3-1 2-3 3 1 2-2zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
          />
        </svg>
      ),
    },
    {
      label: "Поддержка",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a9 9 0 0 1 9 9v5a2 2 0 0 1-2 2h-3v-6h3v-1a7 7 0 0 0-14 0v1h3v6H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 9-9zm-1 14h2v4h-2v-4z"
          />
        </svg>
      ),
    },
  ];

  const getPrimaryNavClassName = (isActive: boolean) => {
    if (isActive) {
      return "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition bg-emerald-50 text-emerald-900";
    }

    return "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition text-slate-500 hover:bg-slate-100 hover:text-slate-800";
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-[260px] flex-col border-r border-slate-200 bg-white px-6 py-7 lg:flex">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900 text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 3 3 8v2h18V8l-9-5zm-7 8v8h4v-6h6v6h4v-8H5z"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                BankFinTech
              </p>
              <p className="text-xs text-slate-400">Персональный банк</p>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {primaryNavigation.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                aria-current={item.isActive ? "page" : undefined}
                className={getPrimaryNavClassName(item.isActive)}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Система
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {systemNavigation.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 px-6 py-8 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
