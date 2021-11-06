function Logo(props) {
  return (
    <svg
      width={63}
      height={60}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="prefix__a" d="M.495.526h57.777V24.17H.495z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#5ED7C6"
          d="M0 0v59.108h59.109V46.442h-4.222v8.444H4.222V4.222H42.22v12.666h12.667v8.445h4.222V12.666L46.442 0z"
        />
        <g transform="translate(9 20)">
          <mask id="prefix__b" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <text
            mask="url(#prefix__b)"
            fontFamily="Roboto-Black, Roboto"
            fontSize={18}
            fontWeight={700}
            fill="#572EE5"
          >
            <tspan x={3} y={21}>
              {"GIFOS"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

export { Logo };
