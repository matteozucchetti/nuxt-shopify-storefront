export default function (products, currentPage, perPage) {
  const start = (currentPage - 1) * perPage;
  const end = currentPage * perPage;
  return products.slice(start, end);
}
