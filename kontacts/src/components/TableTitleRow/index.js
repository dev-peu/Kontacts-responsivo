import "./styles.css";

export default function TableTitleRow(props) {
  const { titles } = props;
  return (
    <div className="title-container">
      {titles.map((title) => (
        <span key={title} className="title">
          {title}
        </span>
      ))}
      <div className="empty" />
    </div>
  );
}
