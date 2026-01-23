import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { LoginFormValues } from "../model/types";
import { loginSchema } from "../model/loginShema";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      remember: false,
    },
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    handleTogglePasswordVisibility();
  };

  const handleLinkKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    event.currentTarget.click();
  };

  const handleLinkClick = () => {};

  const handleSubmitForm = async (data: LoginFormValues) => {
    console.log("LOGIN DATA", data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="mx-auto flex w-full max-w-md flex-col gap-5"
    >
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Добро пожаловать
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Пожалуйста, введите логин для авторизации
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-slate-500" htmlFor="login-id">
          Email или телефон
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5H4z" />
            </svg>
          </span>
          <input
            id="login-id"
            type="text"
            placeholder="Введите email или телефон"
            aria-label="Email или телефон"
            aria-invalid={Boolean(errors.identifier)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            {...register("identifier")}
          />
        </div>
        {errors.identifier?.message ? (
          <p className="text-xs text-rose-500" role="alert">
            {errors.identifier.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="text-xs font-medium text-slate-500"
          htmlFor="login-password"
        >
          Пароль
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-6 0V7a2 2 0 1 1 4 0v2h-4z" />
            </svg>
          </span>
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            aria-label="Пароль"
            aria-invalid={Boolean(errors.password)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50/70 py-2.5 pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            {...register("password")}
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            onKeyDown={handlePasswordKeyDown}
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            tabIndex={0}
          >
            {showPassword ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="m3 4 18 18-1.5 1.5-3.3-3.3A10.8 10.8 0 0 1 12 21C6.6 21 2 16.6 2 12c0-1.9.7-3.8 2-5.5L1.5 5.5 3 4zm9 5a3 3 0 0 1 3 3c0 .6-.2 1.2-.5 1.6L10.4 9.5c.4-.3 1-.5 1.6-.5zm0-4c5.4 0 10 4.4 10 9 0 2-1 4-2.6 5.6l-2.2-2.2A5 5 0 0 0 12 7a5 5 0 0 0-3.4 1.4L6.2 6C7.9 4.7 9.9 5 12 5z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 5c5.4 0 10 4.4 10 7s-4.6 7-10 7S2 14.6 2 12s4.6-7 10-7zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
              </svg>
            )}
          </button>
        </div>
        {errors.password?.message ? (
          <p className="text-xs text-rose-500" role="alert">
            {errors.password.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-500"
            aria-label="Запомнить"
            {...register("remember")}
          />
          Запомнить
        </label>
        <RouterLink
          to="/forgot-password"
          className="font-medium text-emerald-700 hover:text-emerald-800"
          aria-label="Забыли пароль"
          tabIndex={0}
          onClick={handleLinkClick}
          onKeyDown={handleLinkKeyDown}
        >
          Забыли пароль?
        </RouterLink>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-emerald-400"
      >
        {isSubmitting ? "Входим..." : "Войти"}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5 12h12l-4-4 1.4-1.4L21.8 12l-7.4 7.4L13 18l4-4H5v-2z" />
        </svg>
      </button>

      <div className="flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        или войти через
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="flex gap-3 text-xs">
        <button
          type="button"
          aria-label="Войти через номер карты"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        >
          <span className="h-3.5 w-3.5 rounded-sm bg-slate-200" />
          Номер карты
        </button>
        <button
          type="button"
          aria-label="Войти через Госуслуги"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        >
          <span className="h-3.5 w-3.5 rounded-sm bg-slate-200" />
          Госуслуги
        </button>
      </div>

      <p className="text-center text-xs text-slate-400">
        Нет аккаунта?{" "}
        <RouterLink
          to="/register"
          className="font-semibold text-emerald-700 hover:text-emerald-800"
          aria-label="Зарегистрироваться"
          tabIndex={0}
          onClick={handleLinkClick}
          onKeyDown={handleLinkKeyDown}
        >
          Зарегистрируйтесь
        </RouterLink>
      </p>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" />
        </svg>
        Защищенное соединение • SSL Secure
      </div>
    </form>
  );
};
