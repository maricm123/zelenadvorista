import Image from "next/image";

interface DataType {
  id?: number;
  name?: string;
  title?: string;
  galerija?: string;
}

const SingleTeamV2 = ({
  team,
  index,
  onOpen,
}: {
  team: DataType;
  index: number;
  onOpen: (index: number) => void;
}) => {
  const { name, title, galerija } = team;

  return (
    <div className="farmer-style-one-item">
      <div className="galerija" style={{ cursor: "pointer" }} onClick={() => onOpen(index)}>
        <Image
          src={`/assets/img/farmers/${galerija}`}
          alt={name ?? "Team member"}
          width={700}
          height={700}
          quality={75}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* <div className="info">
        <span>{title}</span>
        <h4>{name}</h4>
      </div> */}
    </div>
  );
};

export default SingleTeamV2;
