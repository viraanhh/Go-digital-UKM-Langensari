function AvatarFoto({ src, nama, className }) {
  const hasImage = src && src.trim() !== '';

  if (hasImage) {
    return <img src={src} alt={nama} className={className} />;
  }

  return (
    <div className={`${className} avatar-placeholder`}>
      <span>{nama}</span>
    </div>
  );
}

export default AvatarFoto;