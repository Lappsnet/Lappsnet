export const rewardsData = {
  rewardsProgram: {
    title: "XFY Rewards+",
    description:
      "Unlock Exclusive Rewards with Every Deposit. At XFY D-Money, we value your trust and commitment. Our XFY Rewards+ program is designed to reward you for your continued engagement and deposits. The more you deposit, the more you earn!",
    tiers: [
      {
        name: "Silver Tier",
        eligibility: "1,000 - 4,999 Points",
        benefits: [
          { text: "2% Bonus Interest", icon: "💰" },
          { text: "Priority Customer Support", icon: "📞" },
          { text: "Referral Boost", icon: "🔗" },
          { text: "Exclusive Webinars", icon: "🎓" },
        ],
        color: "bg-gradient-to-r from-[#52b1ff] to-[#f0f6fe]", // Azul cielo suave a azul pastel
      },
      {
        name: "Gold Tier",
        eligibility: "5,000 - 14,999 Points",
        benefits: [
          { text: "3% Bonus Interest", icon: "💰" },
          { text: "Personal Financial Consultation", icon: "👨‍💼" },
          { text: "VIP Events", icon: "🎟️" },
          { text: "Higher Referral Bonus", icon: "🔝" },
        ],
        color: "bg-gradient-to-r from-[#f4f4f4] to-[#d6dde8]", // Azul suave intermedio
      },
      {
        name: "Platinum Tier",
        eligibility: "15,000+ Points",
        benefits: [
          { text: "4% Bonus Interest", icon: "💰" },
          { text: "Dedicated Account Manager", icon: "👤" },
          { text: "Special Discounts", icon: "💸" },
          { text: "Premium VIP Events", icon: "🌟" },
          { text: "Unlimited Referrals", icon: "♾️" },
        ],
        color: "bg-gradient-to-r from-[#ecfcff] to-[#97deff]", // Azul claro con tono frío
      },
    ],
  },
};
