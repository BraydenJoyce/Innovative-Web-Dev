function Image({ src, width }) {
  return (
    <img
      src={src}
      width={width}
      height={width}
      alt="character"
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
}

export default Image;
