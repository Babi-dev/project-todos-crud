export default function filteredList(list, curFilter) {
  switch (curFilter) {
    case "all":
      return list;
    case "active":
      return list.filter(item => {
        return !item.completed;
      });
    case "completed":
      return list.filter(item => {
        return item.completed;
      });
    default:
      throw new Error();
  }
}
