import { useCallback, useEffect, useRef } from "react";

export default function FlyerLightbox({ flyers, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const flyer = flyers[index];
  const count = flyers.length;

  const prev = useCallback(
    () => onChange((index - 1 + count) % count),
    [index, count, onChange]
  );
  const next = useCallback(
    () => onChange((index + 1) % count),
    [index, count, onChange]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="ue-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${flyer.caption} (${index + 1} of ${count})`}
      onClick={onClose}
    >
      <div className="ue-lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="ue-lightbox__close"
          onClick={onClose}
          aria-label="Close flyer"
        >
          ×
        </button>

        <img className="ue-lightbox__img" src={flyer.src} alt={flyer.alt} />

        <div className="ue-lightbox__bar">
          {count > 1 && (
            <button type="button" className="ue-lightbox__nav" onClick={prev} aria-label="Previous flyer">
              ‹
            </button>
          )}
          <span className="ue-lightbox__caption">
            {flyer.caption} · {index + 1}/{count}
          </span>
          {count > 1 && (
            <button type="button" className="ue-lightbox__nav" onClick={next} aria-label="Next flyer">
              ›
            </button>
          )}
          <a className="ue-lightbox__download" href={flyer.src} download>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
