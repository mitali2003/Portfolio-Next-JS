const ListItem = ({ text, icon }: { text: string; icon?: string }) => (
  <li className="flex items-start gap-2">
    <span className="text-[#00FFFF] mt-1">•</span>

    <span className="flex-1">
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  </li>
);

export default ListItem;
