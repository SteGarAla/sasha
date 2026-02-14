"use client";
import style from "@/app/page.module.css";
import { useState } from "react";

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

  async function copyToClipboard() {
    if (!url) return;
    await navigator.clipboard.writeText(url);
  }

  return (
    <main className={style.mainContainer}>
      <div className={style.stack}>
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
        </section>

        {state ?
          <section className={style.card}>
            <header className={style.header}>
              <h2 className={style.titleSmall}>Your short link</h2>
              <p className={style.subtitle}>
                Save it somewhere safe, it expires in 15 days.
              </p>
            </header>

            <div className={style.resultBox}>
              <div className={style.resultMeta}>
                <span className={style.badge}>Ready</span>
                <span className={style.resultHint}>Copy it to share</span>
              </div>

              <div
                className={style.resultLink}
                aria-label="Generated short link"
              >
                {url}
              </div>

              <button
                className={style.copyButton}
                type="button"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>
          </section>
        : <div />}
      </div>
    </main>
  );
}
