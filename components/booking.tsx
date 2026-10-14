"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

const services = ["泡泡基础洗护", "毛茸茸造型护理", "喵星人轻柔洗护"];
const BookingContext = createContext<(service?: string) => void>(() => {});

export function BookingButton({
  service,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { service?: string }) {
  const open = useContext(BookingContext);
  return (
    <button {...props} type="button" onClick={() => open(service)}>
      {children}
    </button>
  );
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [pet, setPet] = useState("");
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [minimumDate, setMinimumDate] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function open(selected?: string) {
    setConfirmation("");
    if (selected) setService(selected);
    const now = new Date();
    setMinimumDate(
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
    );
    dialog.current?.showModal();
  }

  return (
    <BookingContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        id="booking"
        aria-labelledby="booking-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="close"
          type="button"
          aria-label="关闭预约窗口"
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <h2 id="booking-title">安排一次小焕新 🫧</h2>
        <p>选好服务和时间，保存你的到店计划。</p>
        <form
          id="form"
          hidden={!!confirmation}
          onSubmit={(event) => {
            event.preventDefault();
            const plan = { pet, service, date };
            let saved = true;
            try {
              localStorage.setItem("pawpaw-plan", JSON.stringify(plan));
            } catch {
              saved = false;
            }
            setConfirmation(
              (saved ? "到店计划已保存在此浏览器。" : "到店计划已生成。") +
                ` ${pet} · ${service} · ${date}。这不是门店确认的预约。`,
            );
          }}
        >
          <label htmlFor="pet">毛孩子的名字</label>
          <input
            id="pet"
            required
            placeholder="例如：泡芙"
            maxLength={30}
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          />
          <label htmlFor="service">洗护服务</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {services.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <label htmlFor="date">希望到店的日期</label>
          <input
            id="date"
            type="date"
            required
            min={minimumDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button className="btn form-submit" type="submit">
            保存到店计划 ↗
          </button>
          <p className="note">
            此页面为店铺展示样稿，计划仅保存在当前浏览器，不会发送至门店。
          </p>
        </form>
        {confirmation && (
          <div id="confirmation" role="status">
            {confirmation}
          </div>
        )}
      </dialog>
    </BookingContext.Provider>
  );
}
