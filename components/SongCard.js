import Image from "next/image";

export default function SongCard({ song, index, isRecommendation = false }) {
  return (
    <a
      href={song.spotifyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        animationDelay: `${index * 0.05}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(200,146,42,0.08)";
        e.currentTarget.style.borderColor = "rgba(200,146,42,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {/* Track number */}
      <span
        className="font-mono text-xs w-6 text-right flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity"
        style={{ color: "var(--ember)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Album art */}
      <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden"
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>
        {song.albumArt ? (
          <Image
            src={song.albumArt}
            alt={`${song.album || song.name} cover`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="48px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: "var(--smoke)" }}>
            <span className="text-xl">♪</span>
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "rgba(0,0,0,0.6)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 2l10 6-10 6V2z" fill="var(--ember)" />
          </svg>
        </div>
      </div>

      {/* Song info */}
      <div className="flex-1 min-w-0">
        <p className="font-body font-medium truncate text-sm leading-tight"
          style={{ color: "var(--cream)" }}>
          {song.name}
        </p>
        <p className="font-body text-xs truncate mt-0.5 opacity-50"
          style={{ color: "var(--cream)" }}>
          {song.artist}
        </p>
        {isRecommendation && song.reason && (
          <p className="font-body text-xs truncate mt-1 italic"
            style={{ color: "var(--ember)", opacity: 0.8 }}>
            {song.reason}
          </p>
        )}
      </div>

      {/* Spotify icon */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--ember)">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>
    </a>
  );
}
