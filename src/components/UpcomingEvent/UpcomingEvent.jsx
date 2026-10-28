import { useMemo, useState } from "react";
import { getFeaturedEvent } from "../../data/events";
import useCountdown from "../../hooks/useCountdown";
import FlyerLightbox from "./FlyerLightbox";
import "./UpcomingEvent.css";

const pad = (n) => String(n).padStart(2, "0");

function CopyField({ label, value, copyValue }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = copyValue ?? value;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / non-HTTPS
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="ue-donate__row">
      <dt>{label}</dt>
      <dd>
        <span className="ue-donate__value">{value}</span>
        <button type="button" className="ue-copy" onClick={copy} aria-label={`Copy ${label}`}>
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </dd>
    </div>
  );
}

export default function UpcomingEvent() {
  const event = useMemo(() => getFeaturedEvent(), []);
  const { days, hours, minutes, seconds, total } = useCountdown(event.startsAt);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const hasEnded = Date.now() > new Date(event.endsAt || event.startsAt).getTime();
  const isLive = total === 0 && !hasEnded;
  const { rsvp, venue, donation, flyers } = event;

  const mailto =
    `mailto:${rsvp.email}?subject=${encodeURIComponent(rsvp.emailSubject)}` +
    `&body=${encodeURIComponent(rsvp.emailBody)}`;

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hrs" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Sec" },
  ];

  return (
    <section id="events" className="ue" aria-labelledby="ue-title">
      <div className="ue__grid">
        {/* ---------- Left: flyer ---------- */}
        <div className="ue__media">
          <button
            type="button"
            className="ue__poster"
            onClick={() => setLightboxIndex(0)}
            aria-label="Open the full event poster"
          >
            <img src={flyers[0].src} alt={flyers[0].alt} loading="lazy" decoding="async" />
            <span className="ue__poster-hint">Tap to view full flyer</span>
          </button>

          {flyers.length > 1 && (
            <div className="ue__thumbs" role="list">
              {flyers.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  role="listitem"
                  className="ue__thumb"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={f.src} alt="" loading="lazy" decoding="async" />
                  <span>{f.caption}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---------- Right: details ---------- */}
        <div className="ue__panel">
          <p className="ue__eyebrow">{hasEnded ? "Recent Event" : event.eyebrow}</p>
          <span className="ue__divider" aria-hidden="true" />
          <p className="ue__tagline">{event.tagline}</p>

          <h2 id="ue-title" className="ue__title">
            {event.title}
            <span className="ue__subtitle">{event.subtitle}</span>
          </h2>

          <ul className="ue__meta">
            <li>
              <span className="ue__meta-label">Date</span>
              {event.dateLabel}
            </li>
            <li>
              <span className="ue__meta-label">Time</span>
              <span>
                {event.schedule.map((s) => (
                  <span key={s.label} className={s.highlight ? "ue__time ue__time--hl" : "ue__time"}>
                    {s.label} <strong>{s.time}</strong>
                  </span>
                ))}
              </span>
            </li>
            <li>
              <span className="ue__meta-label">Venue</span>
              <a href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                {venue.name}, {venue.address}
              </a>
            </li>
            <li>
              <span className="ue__meta-label">Dress code</span>
              {event.dressCode}
            </li>
          </ul>

          {hasEnded ? (
            <div className="ue__status">
              This event has concluded. Thank you to everyone who joined us.{" "}
              <a href="#gallery">See photos in the gallery</a>
            </div>
          ) : isLive ? (
            <div className="ue__status ue__status--live">Happening now. Welcome!</div>
          ) : (
            <div className="ue__countdown">
              <span className="ue__begins">Begins in</span>
              <div className="ue__units" aria-hidden="true">
                {units.map((u) => (
                  <div key={u.label} className="ue__unit">
                    <span className="ue__circle">{pad(u.value)}</span>
                    <span className="ue__unit-label">{u.label}</span>
                  </div>
                ))}
              </div>
              <span className="ue-sr-only">
                Begins in {days} days, {hours} hours and {minutes} minutes
              </span>
            </div>
          )}

          {!hasEnded && (
            <div className="ue__actions">
              <a
                className="ue-btn ue-btn--primary"
                href={rsvp.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                RSVP on WhatsApp
              </a>
              <a className="ue-btn ue-btn--ghost" href={mailto}>
                RSVP by email
              </a>
            </div>
          )}
          {!hasEnded && (
            <p className="ue__rsvp-note">
              RSVP contact: {rsvp.contactName},{" "}
              <a href={`tel:${rsvp.phone}`}>{rsvp.phoneDisplay}</a>
            </p>
          )}
        </div>
      </div>

      {/* ---------- Donations ---------- */}
      {donation && (
        <div className="ue-donate">
          <div className="ue-donate__intro">
            <h3>Support the fundraising</h3>
            <p>
              Funds go to youth education programmes in Nigeria and youth integration
              initiatives in Germany.
            </p>
            {donation.note && <p className="ue-donate__note">{donation.note}</p>}
          </div>
          <dl className="ue-donate__details">
            <div className="ue-donate__row">
              <dt>Account name</dt>
              <dd><span className="ue-donate__value">{donation.accountName}</span></dd>
            </div>
            <div className="ue-donate__row">
              <dt>Bank</dt>
              <dd><span className="ue-donate__value">{donation.bank}</span></dd>
            </div>
            <CopyField label="IBAN" value={donation.iban} copyValue={donation.iban.replace(/\s/g, "")} />
            <CopyField label="Reference (Verwendungszweck)" value={donation.reference} />
          </dl>
        </div>
      )}

      {lightboxIndex !== null && (
        <FlyerLightbox
          flyers={flyers}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
