import "boxicons/css/boxicons.min.css";

interface IconProps {
  name: string;   
  size?: string; 
  color?: string; 
}

const Icon = ({ name, size = "24px", color = "white" }: IconProps) => {
  return <i className={`bx ${name}`} style={{ fontSize: size, color }}></i>;
};

export default Icon;