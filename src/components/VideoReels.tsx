const REEL2_URL = "https://ucarecdn.com/4d92fc8e-c47a-4676-9d92-7686679d88a6/";

export default function VideoReels() {
  return (
    <section className="bg-white py-14 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary font-display font-semibold text-xs tracking-widest uppercase">Watch & See</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mt-2">See Us in Action</h2>
          <p className="font-display text-muted-foreground text-sm sm:text-base mt-3 max-w-md mx-auto">
            Follow us for more behind-the-scenes looks at the Lexington Auto Spa difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* Reel 1 — Facebook embed */}
          <div
            className="w-full sm:w-[380px] lg:w-[460px] rounded-2xl overflow-hidden ring-1 ring-border shadow-2xl bg-black flex-shrink-0"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1506198107675757%2F&show_text=false&width=476&t=0&autoplay=true&mute=true"
              width="100%"
              height="100%"
              style={{ border: "none", overflow: "hidden", display: "block" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Lexington Auto Spa reel 1"
            />
          </div>

          {/* Reel 2 — native video (autoplay, loop, muted) */}
          <div
            className="w-full sm:w-[380px] lg:w-[460px] rounded-2xl overflow-hidden ring-1 ring-border shadow-2xl bg-black flex-shrink-0"
            style={{ aspectRatio: "1 / 1" }}
          >
            <video
              src={REEL2_URL}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a href="https://www.instagram.com/lexingtonautospaky/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/lexingtonautospa/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
