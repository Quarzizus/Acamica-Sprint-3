const Gift = ({ src, alt = "gift", href = "/" }) => {
  return (
    <a href={href} target="_blank">
      <img src={src} alt={alt} />
    </a>
  );
};

export { Gift };
