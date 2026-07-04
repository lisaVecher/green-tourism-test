export const calculatePaginationData = (count, page, limit) => {
  const totalPages = Math.ceil(count / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    page,
    limit,
    total: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
