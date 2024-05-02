export default function (products, order) {
  return products.sort((a, b) => {
    if (order === "ASC") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
}
