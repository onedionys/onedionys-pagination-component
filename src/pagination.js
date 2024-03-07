/**
 * Pagination Component
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {number} visiblePages - The number of visible page links.
 * @returns {Array} - An array of page numbers to be displayed.
 */
function generatePagination(currentPage, totalPages, visiblePages) {
    let startPage, endPage;

    if (totalPages <= visiblePages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const halfVisible = Math.floor(visiblePages / 2);
        if (currentPage <= halfVisible) {
            startPage = 1;
            endPage = visiblePages;
        } else if (currentPage + halfVisible >= totalPages) {
            startPage = totalPages - visiblePages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfVisible;
            endPage = currentPage + halfVisible;
        }
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}

module.exports = generatePagination;
