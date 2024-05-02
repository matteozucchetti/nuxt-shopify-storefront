export default function (products) {
  return products
    .reduce((acc, product) => {
      const tags = product.tags.split(",").map((tag) => tag.trim());
      tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, [])
    .sort((a, b) => a.localeCompare(b));
}
