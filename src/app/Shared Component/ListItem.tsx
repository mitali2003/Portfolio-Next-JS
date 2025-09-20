const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="text-primary mt-1 text-[#00FFFF]">•</span>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
