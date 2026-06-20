const portrait = "/images/photo-wall/photo-2js9.jpeg";

type Props = {
  size?: number;
};

const PhotoWall: React.FC<Props> = ({ size = 512 }) => {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-surface/70 shadow-soft" style={{ width: size, height: size * 1.12 }}>
      <img src={portrait} alt="Anshuman Tiwari" className="h-full w-full object-cover object-top" />
    </div>
  );
};

export default PhotoWall;
