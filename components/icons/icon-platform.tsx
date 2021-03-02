type Props = { color: string; height?: number | string };

export default function PlatformLogo({ color, height = 20 }: Props) {
  return (
    <svg width="100" height="16" fill="none">
      <path
        d="M8.257 0l8.466 5.14v5.14L8.257 5.14V0z"
        fill="url(#logo_gold_paint0_linear)"
      ></path>
      <path
        d="M8.257 15.991l8.466-5.088V5.815l-8.466 5.088v5.088z"
        fill="url(#logo_gold_paint1_linear)"
      ></path>
      <path
        d="M8.257 0L0 5.14v5.14l8.257-5.14V0z"
        fill="url(#logo_gold_paint2_linear)"
      ></path>
      <path
        d="M8.257 15.991L0 10.903V5.815l8.257 5.088v5.088z"
        fill="url(#logo_gold_paint3_linear)"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9 12.997h1.42V2.868H26.9v10.129zm2.926-4.649v-1.22l2.554-4.26h1.564l-2.941 4.806v.029l3.128 5.294h-1.607l-2.698-4.649zm13.79-5.48l-1.98 7.431c-.144.56-.216 1.077-.216 1.077h-.029s-.057-.531-.186-1.076L39.41 2.867h-1.463l2.582 10.13h1.65l1.75-6.571c.173-.646.302-1.435.302-1.435h.029s.129.789.301 1.435l1.75 6.57h1.65l2.655-10.129h-1.464L47.288 10.3c-.143.545-.186 1.076-.186 1.076h-.03s-.07-.517-.214-1.076l-1.98-7.433h-1.263zm17.98 10.129H55.47V2.867h5.882v1.234H56.89v3.171h3.63v1.234h-3.63v3.257h4.706v1.234zm5.111 0h1.42V6.426c0-.574-.1-1.478-.1-1.478h.029s.474.918.847 1.478l4.52 6.57h1.39V2.868h-1.42v6.586c0 .56.1 1.463.1 1.463h-.028s-.473-.918-.846-1.463l-4.506-6.586h-1.406v10.13zm17.459 0h-1.42V4.1h-3.472V2.867h8.364v1.234h-3.472v8.896zm13.355 0h1.478l-3.645-10.13h-1.492l-3.644 10.13h1.463l.99-2.87.388-1.22 1.133-3.213c.172-.517.402-1.435.402-1.435h.029s.215.918.387 1.435l1.12 3.214.385 1.212 1.006 2.877z"
        fill="#fff"
      ></path>
      <defs>
        <linearGradient
          id="logo_gold_paint0_linear"
          x1="23.942"
          y1="5.111"
          x2="3.065"
          y2="5.111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#996939"></stop>
          <stop offset="1" stopColor="#D0A875"></stop>
        </linearGradient>
        <linearGradient
          id="logo_gold_paint1_linear"
          x1="12.49"
          y1="15.991"
          x2="14.546"
          y2="-3.474"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#272728"></stop>
          <stop offset="1" stopColor="#4B4B4B"></stop>
        </linearGradient>
        <linearGradient
          id="logo_gold_paint2_linear"
          x1="8.308"
          y1="2.107"
          x2="-0.002"
          y2="8.618"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#996939" />
          <stop offset="1" stopColor="#D0A875"></stop>
        </linearGradient>
        <linearGradient
          id="logo_gold_paint3_linear"
          x1="4.128"
          y1="15.991"
          x2="4.128"
          y2="5.815"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#363636"></stop>
          <stop offset="1" stopColor="#333232"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
