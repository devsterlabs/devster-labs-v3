export const CustomButton = ({
  style,
  children,
  onClick,
}) => {
  return (
    <div>
      <div className="btn-container">
        <button style={style} onClick={onClick ? onClick : () => {}}>
          {children}
        </button>
      </div>
    </div>
  );
};
