"use client";
import style from "@/app/page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [urlTail, set_urlTail] = useState("");
  const [state, setState] = useState(false);
  const [url, setUrl] = useState("");

  async function createTail() {
    const res = await fetch("/api/generateLink", { method: "POST" });
    const data = await res.json();

    const tail = data.urlEnding as string;
    set_urlTail(tail);
    setState(true);
    setUrl(`http://localhost:3000/${tail}`);
  }
  return (
    <main className={style.mainContainer}>
      <section className={style.card}>
        <header className={style.header}>
          <h1 className={style.title}>URL Shortener</h1>
          <p className={style.subtitle}>Paste a link, get a short one.</p>
        </header>

        <div className={style.inputRow}>
          <input
            className={style.input}
            type="text"
            placeholder="https://example.com/very/long/link"
          />
          <button className={style.button} type="button" onClick={createTail}>
            Shorten
          </button>
        </div>

        <p className={style.hint}>Press Enter to submit.</p>

        <div>
          {state ?
            <div>
              Hello, this is your link:
              <a href={url}>{url}</a>
            </div>
          : <div></div>}
        </div>
      </section>
    </main>
  );
}
