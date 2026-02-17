import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import { getAuthUrl } from "../lib/spotify";

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [authUrl, setAuthUrl] = useState("#");

  useEffect(() => {
    if (router.query.error) {
      setError(decodeURIComponent(router.query.error));
    }
    // Build the auth URL client-side isn't ideal but works for demo
    // In production, redirect via /api/login endpoint
  }, [router.query]);

  const handleSpotifyLogin = () => {
    window.location.href = "/api/login";
  };

  const handleMockLogin = () => {
    router.push("/playlist?mock=true");
  };

  return (
    <>
      <Head>
        <title>vibe.fm — AI Song Recommender</title>
        <meta name="description" content="Discover new music based on your listening vibe" />
      </Head>

      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,146,42,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Decorative vinyl records in background */}
        <div className="absolute pointer-events-none opacity-5"
          style={{ top: "10%", left: "5%", width: 200, height: 200 }}>
          <VinylDecor size={200} />
        </div>
        <div className="absolute pointer-events-none opacity-5"
          style={{ bottom: "15%", right: "8%", width: 140, height: 140 }}>
          <VinylDecor size={140} />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Tagline */}
          <p
            className="font-mono text-xs tracking-widest uppercase mb-6 animate-fade-up stagger-1"
            style={{ color: "var(--ember)" }}
          >
            AI-Powered Music Discovery
          </p>

          {/* Headline */}
          <h1
            className="font-display text-6xl md:text-8xl font-black leading-none mb-4 animate-fade-up stagger-2"
            style={{ color: "var(--cream)" }}
          >
            Find your
            <br />
            <em style={{ color: "var(--ember)", fontStyle: "italic" }}>vibe.</em>
          </h1>

          {/* Sub-headline */}
          <p
            className="font-body text-lg md:text-xl opacity-60 mb-12 leading-relaxed animate-fade-up stagger-3"
            style={{ color: "var(--cream)" }}
          >
            Connect your Spotify. We analyze what you've been listening to
            and Claude finds what you need to hear next.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-4">
            <button
              onClick={handleSpotifyLogin}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--ember)",
                color: "var(--coal)",
                boxShadow: "0 0 0 0 rgba(200,146,42,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(200,146,42,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--ember)";
                e.currentTarget.style.boxShadow = "0 0 0 0 rgba(200,146,42,0.5)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Connect with Spotify
            </button>

            <button
              onClick={handleMockLogin}
              className="px-8 py-4 rounded-full font-body font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                color: "var(--cream)",
                border: "1px solid rgba(245,234,214,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,146,42,0.5)";
                e.currentTarget.style.color = "var(--ember)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,234,214,0.2)";
                e.currentTarget.style.color = "var(--cream)";
              }}
            >
              Try with sample data →
            </button>
          </div>

          {error && (
            <div
              className="mt-8 px-6 py-3 rounded-lg text-sm font-body"
              style={{
                background: "rgba(220,50,50,0.1)",
                border: "1px solid rgba(220,50,50,0.3)",
                color: "#ff6b6b",
              }}
            >
              {error}
            </div>
          )}

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-12 animate-fade-up stagger-5">
            {["Powered by Claude AI", "Spotify Integration", "Instant Playlist", "No Ads"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1.5 rounded-full opacity-40"
                style={{
                  border: "1px solid rgba(245,234,214,0.2)",
                  color: "var(--cream)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function VinylDecor({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="98" stroke="white" strokeWidth="1" />
      <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="8" fill="white" />
      <circle cx="100" cy="100" r="4" fill="black" />
    </svg>
  );
}
