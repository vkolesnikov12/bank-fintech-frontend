import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  ReactElement,
} from "react";

export const DashboardPage = () => {
  type QuickAction = {
    label: string;
    icon: ReactElement;
  };

  type TransactionItem = {
    name: string;
    category: string;
    date: string;
    amount: string;
    tone: string;
    icon: ReactElement;
  };

  type NotificationItem = {
    title: string;
    description: string;
    time: string;
    tone: string;
  };

  type ProductType = "CREDIT" | "DEPOSIT" | "INVESTMENT";
  type CurrencyType = "RUB" | "USD" | "EUR";
  type CreditType = "CONSUMER" | "MORTGAGE" | "AUTO";
  type RepaymentSchedule = "ANNUITY" | "DIFFERENTIATED";

  type BaseProductForm = {
    id: string;
    code: string;
    name: string;
    description: string;
    type: ProductType;
    interestRate: string;
    minAmount: string;
    maxAmount: string;
    currency: CurrencyType;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    creditType: CreditType;
    requiresCollateral: boolean;
    repaymentSchedule: RepaymentSchedule;
    termMonths: string;
    earlyRepaymentFee: string;
    replenishable: boolean;
    earlyWithdrawalAllowed: boolean;
    earlyWithdrawalPenalty: string;
    termDays: string;
    minBalanceForInterest: string;
  };

  const defaultProductForm: BaseProductForm = {
    id: "",
    code: "",
    name: "",
    description: "",
    type: "CREDIT",
    interestRate: "",
    minAmount: "",
    maxAmount: "",
    currency: "RUB",
    active: true,
    createdAt: "",
    updatedAt: "",
    creditType: "CONSUMER",
    requiresCollateral: false,
    repaymentSchedule: "ANNUITY",
    termMonths: "",
    earlyRepaymentFee: "",
    replenishable: true,
    earlyWithdrawalAllowed: false,
    earlyWithdrawalPenalty: "",
    termDays: "",
    minBalanceForInterest: "",
  };

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [productForm, setProductForm] = useState<BaseProductForm>(
    defaultProductForm,
  );

  const quickActions: QuickAction[] = [
    {
      label: "Перевод",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 7h12l-3-3 1.4-1.4L20.8 9l-6.4 6.4L13 14l3-3H4V7z"
          />
        </svg>
      ),
    },
    {
      label: "Скачать заявление",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3v10l4-4 1.4 1.4L12 16.8l-5.4-5.4L8 9l4 4V3h2zm-7 14h14v2H5v-2z"
          />
        </svg>
      ),
    },
    {
      label: "QR - оплата",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4 4h6v6H4V4zm2 2v2h2V6H6zm8-2h6v6h-6V4zm2 2v2h2V6h-2zM4 14h6v6H4v-6zm2 2v2h2v-2H6zm8-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2z"
          />
        </svg>
      ),
    },
  ];

  const transactions: TransactionItem[] = [
    {
      name: "Яндекс музыка",
      category: "Развлечения",
      date: "19.01.2026",
      amount: "-200.00 ₽",
      tone: "text-slate-900",
      icon: (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 8h2v4H7V8zm4-2h2v8h-2V6zm4 3h2v5h-2V9z"
            />
          </svg>
        </span>
      ),
    },
    {
      name: "Uber",
      category: "Передвижение",
      date: "19.01.2026",
      amount: "-437.00 ₽",
      tone: "text-slate-900",
      icon: (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M5 9h14l1 5v3h-2a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H4v-3l1-5zm3 8a1 1 0 1 0 0 .01V17zm8 0a1 1 0 1 0 0 .01V17z"
            />
          </svg>
        </span>
      ),
    },
    {
      name: "TechCorp Inc.",
      category: "Доход",
      date: "19.01.2026",
      amount: "+81796.00 ₽",
      tone: "text-emerald-600",
      icon: (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 7h10v10H7V7zm2 2v6h6V9H9z"
            />
          </svg>
        </span>
      ),
    },
    {
      name: "Пятёрочка",
      category: "Еда",
      date: "19.01.2026",
      amount: "-8 331.76 ₽",
      tone: "text-slate-900",
      icon: (
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 6h13l-2 9H9L7 6zm-1 0L5 4H2v2h2l3 12h10v-2H8l-1-4h11v-2H7l-1-4z"
            />
          </svg>
        </span>
      ),
    },
  ];

  const notifications: NotificationItem[] = [
    {
      title: "Доступно новое заявление",
      description:
        "Выписка с вашего текущего счета за декабрь 2025 года теперь готова к загрузке.",
      time: "Сегодня, 9:00",
      tone: "bg-slate-900",
    },
    {
      title: "Пароль изменён",
      description:
        "Пароль вашей учетной записи был успешно обновлен с нового устройства.",
      time: "Вчера",
      tone: "bg-emerald-500",
    },
    {
      title: "Плановое техническое обслуживание",
      description:
        "Техническое обслуживание системы запланировано на 2 часа ночи в воскресенье.",
      time: "10 января",
      tone: "bg-slate-300",
    },
  ];

  const handleOpenCreate = () => {
    setIsCreateOpen(true);
  };

  const handleCloseCreate = () => {
    setIsCreateOpen(false);
    setProductForm(defaultProductForm);
  };

  const handleOverlayClick = () => {
    handleCloseCreate();
  };

  const handleModalKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Escape") {
      return;
    }

    event.preventDefault();
    handleCloseCreate();
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("CREATE PRODUCT", productForm);
    handleCloseCreate();
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const isCheckbox =
      event.target instanceof HTMLInputElement &&
      event.target.type === "checkbox";
    const nextValue = isCheckbox
      ? (event.target as HTMLInputElement).checked
      : value;

    setProductForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getTransactionAmountClassName = (tone: string) => {
    return `text-right text-sm font-semibold ${tone}`;
  };

  const getNotificationDotClassName = (tone: string) => {
    return `mt-1 h-2.5 w-2.5 rounded-full ${tone}`;
  };

  const isCreditProduct = productForm.type === "CREDIT";
  const isDepositProduct = productForm.type === "DEPOSIT";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Добро пожаловать, Виталий
          </h1>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 3v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3h-2v2H9V3H7zm12 6H5v10h14V9z"
              />
            </svg>
            Вт, 20 января
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Уведомления"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.9V4a1 1 0 0 0-2 0v1.1A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Добавить продукт"
            onClick={handleOpenCreate}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5z"
                />
              </svg>
            </span>
            Добавить продукт
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {quickActions.map((action) => (
          <button
            key={action.label}
            type="button"
            aria-label={action.label}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="text-xs text-slate-400">Общая ликвидность</div>
          <div className="text-2xl font-semibold text-slate-900">
            262 854.92 ₽
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">
              <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6 15 12 9l6 6-1.4 1.4L12 11.8 7.4 16.4 6 15z"
                />
              </svg>
              +2.4%
            </span>
            <span className="text-slate-400">В этом месяце</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-slate-400">Активные продукты</div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">
                3 счёта
              </div>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm2 4h8v2H8V8zm0 4h8v2H8v-2z"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-[11px] text-white">
              Ос
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-[11px] text-white">
              Сп
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-[11px] text-white">
              Пт
            </span>
            <button
              type="button"
              className="text-xs font-medium text-emerald-700"
              aria-label="Посмотреть все продукты"
            >
              Посмотреть все
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-slate-400">Активное приложение</div>
              <div className="mt-1 text-base font-semibold text-slate-900">
                Рефинансирование ипотеки
              </div>
            </div>
            <button
              type="button"
              aria-label="Открыть детали"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 6a2 2 0 1 0 .01 0H12zm0 5a2 2 0 1 0 .01 0H12zm0 5a2 2 0 1 0 .01 0H12z"
                />
              </svg>
            </button>
          </div>
          <div className="text-xs font-semibold text-orange-500">
            ОЖИДАЕТ УТВЕРЖДЕНИЯ
          </div>
          <div className="text-xs text-slate-400">Обновлено: 2 часа назад</div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-orange-100">
            <div className="h-full w-2/3 rounded-full bg-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 3h12v18H6V3zm3 4h6v2H9V7zm0 4h6v2H9v-2zm0 4h6v2H9v-2z"
                  />
                </svg>
              </span>
              Последние транзакции
            </div>
            <button
              type="button"
              aria-label="Вся история"
              className="text-xs font-medium text-emerald-700"
            >
              Вся история
            </button>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
            <div className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] gap-2 bg-slate-50 px-4 py-3 text-[11px] font-semibold uppercase text-slate-400">
              <span>Транзакция</span>
              <span>Категория</span>
              <span>Дата</span>
              <span className="text-right">Сумма</span>
            </div>
            <div className="divide-y divide-slate-100">
              {transactions.map((transaction) => (
                <div
                  key={transaction.name}
                  className="grid grid-cols-[1.4fr_1fr_0.8fr_0.8fr] items-center gap-2 px-4 py-4 text-sm"
                >
                  <div className="flex items-center gap-3">
                    {transaction.icon}
                    <div>
                      <div className="text-sm font-medium text-slate-900">
                        {transaction.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {transaction.category}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {transaction.category}
                  </div>
                  <div className="text-xs text-slate-400">
                    {transaction.date}
                  </div>
                  <div
                    className={getTransactionAmountClassName(transaction.tone)}
                  >
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6V11a6 6 0 0 0-5-5.9V4a1 1 0 0 0-2 0v1.1A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z"
                  />
                </svg>
              </span>
              Уведомления
            </div>
            <button
              type="button"
              aria-label="Настройки уведомлений"
              className="text-slate-400 transition hover:text-emerald-700"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6 12a2 2 0 1 0 .01 0H6zm6 0a2 2 0 1 0 .01 0H12zm6 0a2 2 0 1 0 .01 0H18z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {notifications.map((note) => (
              <div
                key={note.title}
                className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4"
              >
                <span
                  className={getNotificationDotClassName(note.tone)}
                />
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {note.title}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {note.description}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">{note.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Просмотр всех уведомлений"
            className="mt-4 w-full rounded-xl border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
          >
            Просмотр всех уведомлений
          </button>
        </div>
      </div>

      {isCreateOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Создание продукта"
          onKeyDown={handleModalKeyDown}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Закрыть форму создания продукта"
            tabIndex={-1}
            onClick={handleOverlayClick}
          />
          <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Создание продукта
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Заполните базовые данные и параметры продукта.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseCreate}
                aria-label="Закрыть"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 6 18 18m0-12L6 18"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Базовые поля
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="id">
                      ID
                    </label>
                    <input
                      id="id"
                      name="id"
                      type="text"
                      placeholder="Например, 1001"
                      value={productForm.id}
                      onChange={handleInputChange}
                      aria-label="Уникальный идентификатор"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="code">
                      Код продукта
                    </label>
                    <input
                      id="code"
                      name="code"
                      type="text"
                      placeholder="CRD-001"
                      value={productForm.code}
                      onChange={handleInputChange}
                      aria-label="Код продукта"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="name">
                      Название
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Кредит наличными"
                      value={productForm.name}
                      onChange={handleInputChange}
                      aria-label="Название продукта"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="type">
                      Тип продукта
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={productForm.type}
                      onChange={handleSelectChange}
                      aria-label="Тип продукта"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="CREDIT">CREDIT</option>
                      <option value="DEPOSIT">DEPOSIT</option>
                      <option value="INVESTMENT">INVESTMENT</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="description">
                      Описание
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      placeholder="Коротко опишите продукт"
                      value={productForm.description}
                      onChange={handleInputChange}
                      aria-label="Описание продукта"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="interestRate">
                      Процентная ставка
                    </label>
                    <input
                      id="interestRate"
                      name="interestRate"
                      type="number"
                      step="0.01"
                      placeholder="10.5"
                      value={productForm.interestRate}
                      onChange={handleInputChange}
                      aria-label="Процентная ставка"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="currency">
                      Валюта
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      value={productForm.currency}
                      onChange={handleSelectChange}
                      aria-label="Валюта"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="RUB">RUB</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="minAmount">
                      Минимальная сумма
                    </label>
                    <input
                      id="minAmount"
                      name="minAmount"
                      type="number"
                      step="0.01"
                      placeholder="50000"
                      value={productForm.minAmount}
                      onChange={handleInputChange}
                      aria-label="Минимальная сумма"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="maxAmount">
                      Максимальная сумма
                    </label>
                    <input
                      id="maxAmount"
                      name="maxAmount"
                      type="number"
                      step="0.01"
                      placeholder="2000000"
                      value={productForm.maxAmount}
                      onChange={handleInputChange}
                      aria-label="Максимальная сумма"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="createdAt">
                      Дата создания
                    </label>
                    <input
                      id="createdAt"
                      name="createdAt"
                      type="datetime-local"
                      value={productForm.createdAt}
                      onChange={handleInputChange}
                      aria-label="Дата создания"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-slate-500" htmlFor="updatedAt">
                      Дата обновления
                    </label>
                    <input
                      id="updatedAt"
                      name="updatedAt"
                      type="datetime-local"
                      value={productForm.updatedAt}
                      onChange={handleInputChange}
                      aria-label="Дата обновления"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2">
                    <input
                      id="active"
                      name="active"
                      type="checkbox"
                      checked={productForm.active}
                      onChange={handleInputChange}
                      aria-label="Статус активности"
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label className="text-xs font-medium text-slate-600" htmlFor="active">
                      Активен
                    </label>
                  </div>
                </div>
              </div>

              {isCreditProduct ? (
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Кредитный продукт
                  </h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="creditType">
                        Тип кредита
                      </label>
                      <select
                        id="creditType"
                        name="creditType"
                        value={productForm.creditType}
                        onChange={handleSelectChange}
                        aria-label="Тип кредита"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >
                        <option value="CONSUMER">CONSUMER</option>
                        <option value="MORTGAGE">MORTGAGE</option>
                        <option value="AUTO">AUTO</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="repaymentSchedule">
                        График погашения
                      </label>
                      <select
                        id="repaymentSchedule"
                        name="repaymentSchedule"
                        value={productForm.repaymentSchedule}
                        onChange={handleSelectChange}
                        aria-label="График погашения"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >
                        <option value="ANNUITY">ANNUITY</option>
                        <option value="DIFFERENTIATED">DIFFERENTIATED</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="termMonths">
                        Срок в месяцах
                      </label>
                      <input
                        id="termMonths"
                        name="termMonths"
                        type="number"
                        placeholder="36"
                        value={productForm.termMonths}
                        onChange={handleInputChange}
                        aria-label="Срок в месяцах"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="earlyRepaymentFee">
                        Комиссия за досрочное погашение
                      </label>
                      <input
                        id="earlyRepaymentFee"
                        name="earlyRepaymentFee"
                        type="number"
                        step="0.01"
                        placeholder="0"
                        value={productForm.earlyRepaymentFee}
                        onChange={handleInputChange}
                        aria-label="Комиссия за досрочное погашение"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2">
                      <input
                        id="requiresCollateral"
                        name="requiresCollateral"
                        type="checkbox"
                        checked={productForm.requiresCollateral}
                        onChange={handleInputChange}
                        aria-label="Требуется залог"
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label className="text-xs font-medium text-slate-600" htmlFor="requiresCollateral">
                        Требуется залог
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}

              {isDepositProduct ? (
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Депозитный продукт
                  </h3>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="termDays">
                        Срок в днях
                      </label>
                      <input
                        id="termDays"
                        name="termDays"
                        type="number"
                        placeholder="180"
                        value={productForm.termDays}
                        onChange={handleInputChange}
                        aria-label="Срок в днях"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="minBalanceForInterest">
                        Минимальный баланс для процентов
                      </label>
                      <input
                        id="minBalanceForInterest"
                        name="minBalanceForInterest"
                        type="number"
                        step="0.01"
                        placeholder="10000"
                        value={productForm.minBalanceForInterest}
                        onChange={handleInputChange}
                        aria-label="Минимальный баланс для процентов"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-slate-500" htmlFor="earlyWithdrawalPenalty">
                        Штраф за досрочное снятие
                      </label>
                      <input
                        id="earlyWithdrawalPenalty"
                        name="earlyWithdrawalPenalty"
                        type="number"
                        step="0.01"
                        placeholder="500"
                        value={productForm.earlyWithdrawalPenalty}
                        onChange={handleInputChange}
                        aria-label="Штраф за досрочное снятие"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2">
                      <input
                        id="replenishable"
                        name="replenishable"
                        type="checkbox"
                        checked={productForm.replenishable}
                        onChange={handleInputChange}
                        aria-label="Возможность пополнения"
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label className="text-xs font-medium text-slate-600" htmlFor="replenishable">
                        Возможность пополнения
                      </label>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2">
                      <input
                        id="earlyWithdrawalAllowed"
                        name="earlyWithdrawalAllowed"
                        type="checkbox"
                        checked={productForm.earlyWithdrawalAllowed}
                        onChange={handleInputChange}
                        aria-label="Досрочное снятие разрешено"
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label className="text-xs font-medium text-slate-600" htmlFor="earlyWithdrawalAllowed">
                        Досрочное снятие разрешено
                      </label>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleCloseCreate}
                  aria-label="Отмена"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  aria-label="Создать продукт"
                  className="rounded-xl bg-emerald-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                >
                  Создать продукт
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};
