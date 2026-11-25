import React from "react";

export function NexoraLogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        className="fill-nexora-surface stroke-nexora-electric/50"
        strokeWidth="1.5"
      />
      <path
        d="M12 28V12L22 24V12"
        stroke="url(#nexora-blue-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 24L28 28V12"
        stroke="#CCFF00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="12" r="2.5" fill="#CCFF00" />
      <defs>
        <linearGradient
          id="nexora-blue-grad"
          x1="12"
          y1="12"
          x2="24"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D4FF" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
