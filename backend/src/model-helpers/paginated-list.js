/*
 * Wrapper for paginated lists
 */
class PaginatedList {
  constructor(items, total_count) {
    this.items = items;
    this.total_count = total_count;
  }
}

module.exports = { PaginatedList };