function RowItem({ className, children }) {
  const names = `text-sm pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 ${className}`;
  return <td className={names}>{children}</td>;
}

export default RowItem;
