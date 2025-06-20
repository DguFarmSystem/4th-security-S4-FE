interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[30px] h-[30px] text-[15px] rounded outline-none border-none ${
            currentPage === page ? 'bg-[#FF7878] text-[#FFF6F6]' : 'bg-[#FFDBDB]'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};