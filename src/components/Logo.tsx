export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Diamond icon */}
      <path
        d="M20 4L34 20L20 36L6 20L20 4Z"
        fill="white"
      />
      <path
        d="M20 12L28 20L20 28L12 20L20 12Z"
        fill="#0a0a0a"
      />
      {/* EVENT text */}
      <text
        x="44"
        y="27"
        fontFamily="ui-monospace, monospace"
        fontSize="16"
        fontWeight="600"
        letterSpacing="2"
        fill="white"
      >
        EVENT
      </text>
      {/* PRO text */}
      <text
        x="120"
        y="27"
        fontFamily="ui-monospace, monospace"
        fontSize="16"
        fontWeight="300"
        letterSpacing="2"
        fill="white"
        opacity="0.6"
      >
        PRO
      </text>
    </svg>
  );
};