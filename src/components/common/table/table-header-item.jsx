function TableHeaderItem({ children, className }) {
  const names = `text-blue-600 font-medium pr-6 text-left text-sm tracking-normal leading-4 ${className}`;
  return <th className={names}>{children}</th>;
}

export default TableHeaderItem;