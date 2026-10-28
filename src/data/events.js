// All event content lives here. To announce the next event, add a new object
// and the section picks the soonest one that hasn't ended yet.
//
// Always write times WITH the UTC offset (+01:00 for CET in winter, +02:00 for
// CEST in summer) so the countdown is correct for visitors in any time zone.

const RSVP_PHONE = "4915215998844"; // international format, no "+" or spaces
const RSVP_NAME = "Kayode Olasoji";

const whatsappText = (eventTitle, dateLabel, place) =>
  `Hello Mr Olasoji, I would like to confirm my attendance at the ${eventTitle} on ${dateLabel} in ${place}.\n\nName:\nNumber of guests:`;

export const events = [
  {
    id: "omoluwabi-award-2026",
    eyebrow: "Upcoming Event",
    tagline: "Countdown to our annual award and fundraising night",
    title: "Ọmọlúwàbí",
    subtitle: "EIOYG Award of Excellence & Fundraising Night",
    description:
      "Join us as we honour extraordinary leaders and innovators who have transformed our society through the enduring values of Ìwà Omolúàbí, while raising funds for youth education programmes in Nigeria and youth integration initiatives in Germany.",

    // Countdown target = start of the Award Night
    startsAt: "2026-11-28T19:00:00+01:00",
    // After this moment the section switches to its "concluded" state
    endsAt: "2026-11-29T02:00:00+01:00",

    dateLabel: "Saturday, 28 November 2026",
    schedule: [
      { label: "Congress Meeting", time: "10:00" },
      { label: "Award Night", time: "19:00", highlight: true },
    ],
    venue: {
      name: "Saalbau Stadthalle Bergen",
      address: "Schelmenburgplatz 2, 60388 Frankfurt am Main",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent("Saalbau Stadthalle Bergen, Schelmenburgplatz 2, 60388 Frankfurt am Main"),
    },
    dressCode: "Nigerian traditional outfit, corporate wear or evening gown",
    host: "Egbe Omo Yoruba Frankfurt, Rhein & Main e.V.",

    rsvp: {
      contactName: RSVP_NAME,
      phone: `+${RSVP_PHONE}`,
      phoneDisplay: "+49 152 15998844",
      whatsappUrl:
        `https://wa.me/${RSVP_PHONE}?text=` +
        encodeURIComponent(
          whatsappText(
            "Ọmọlúwàbí Award of Excellence & Fundraising Night",
            "28 November 2026",
            "Frankfurt"
          )
        ),
      email: "omoluwabi.award@isokanyoruba.com",
      emailSubject: "RSVP: Ọmọlúwàbí Award Night 2026",
      emailBody:
        "Hello,\n\nI would like to confirm my attendance at the Ọmọlúwàbí Award of Excellence & Fundraising Night on 28 November 2026.\n\nName:\nNumber of guests:\nPhone:\n",
    },

    donation: {
      accountName: "Egbe Isokan Omo Yoruba Germany",
      bank: "Sparkasse",
      iban: "DE04 1005 0000 0190 6664 80",
      reference: "Omoluwabi Award 2026",
      note: "Pre-order the Yoruba 2027 Festival Calendar, T-shirt or cap with any donation from €50. From €100 you get all three.",
    },

    // Put your JPGs (or these WebP copies) in /public/images/events/
    flyers: [
      {
        src: "/images/events/omoluwabi-2026-poster.webp",
        alt: "Ọmọlúwàbí Award of Excellence and Fundraising Night poster with award recipients, distinguished guests and entertainment line-up",
        caption: "Event poster",
      },
      {
        src: "/images/events/omoluwabi-2026-invitation-front.webp",
        alt: "Invitation card from the National Council of EIOYG to the Ọmọlúwàbí Award Night",
        caption: "Invitation",
      },
      {
        src: "/images/events/omoluwabi-2026-invitation-back.webp",
        alt: "Back of the invitation card with donation and sponsorship bank details",
        caption: "Donations & sponsorship",
      },
    ],
  },
];

/** The next event that hasn't ended, or the most recent past one. */
export function getFeaturedEvent(now = Date.now()) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.startsAt) - new Date(b.startsAt)
  );
  return (
    sorted.find((e) => new Date(e.endsAt || e.startsAt).getTime() > now) ||
    sorted[sorted.length - 1]
  );
}
