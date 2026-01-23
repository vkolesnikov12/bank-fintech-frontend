import { Outlet } from "react-router-dom";
import authImage from "@/assets/Image.png";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:grid-cols-[1.1fr_1fr]">
        <div className="relative hidden min-h-[520px] md:block">
          <img
            src={authImage}
            alt="Bank lobby"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-emerald-900/60" />
          <div className="absolute inset-0 flex flex-col p-8 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 3 3 8v2h18V8l-9-5zm-7 8v8h4v-6h6v6h4v-8H5z" />
                </svg>
              </span>
              BankFinTech
            </div>

            <div className="mt-auto">
              <p className="text-lg font-semibold leading-snug">
                Безопасный и надежный банк для вашего финансового роста
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/80">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm0 6a4 4 0 0 1 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4a4 4 0 0 1 4-4z" />
                </svg>
                Bank-Grade Security (AES-256)
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
