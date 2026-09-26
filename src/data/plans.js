// Sample pricing. Edit the numbers, features and "popular" flag to match your real plans.
export const plans = [
  {
    name: "Monthly",
    price: "1,999",
    period: "/ month",
    blurb: "No commitment. Good if you're just starting out.",
    features: [
      "Full gym access",
      "Group classes included",
      "Locker access",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "4,999",
    period: "/ 3 months",
    blurb: "Our most-picked plan. Best balance of price and commitment.",
    features: [
      "Everything in Monthly",
      "1 free personal training session",
      "Diet guidance sheet",
      "Save vs monthly",
    ],
    popular: true,
  },
  {
    name: "Annual",
    price: "16,999",
    period: "/ year",
    blurb: "For people who know they're in it for the long run.",
    features: [
      "Everything in Quarterly",
      "4 free personal training sessions",
      "1 free guest pass a month",
      "Best value per month",
    ],
    popular: false,
  },
];

export const addons = [
  {
    name: "Personal Training",
    detail:
      "Priced per session or in packs of 8 / 12. Ask a coach for current rates.",
  },
  {
    name: "Nutrition Coaching",
    detail: "One-on-one food guidance alongside your training plan.",
  },
  {
    name: "Guest Pass",
    detail: "Bring a friend for a single session at a one-time rate.",
  },
];
