export default function (products, tags) {
  if (tags.length === 0) {
    return products;
  }
  return products.filter((product) => {
    const productTags = product.tags.split(",").map((tag) => tag.trim());
    return tags.some((tag) => productTags.includes(tag));
  });
}
