export interface PaginationProps {
    pageSize: number;
    current: number;
    total: number;
    changeHandler: (index: number) => void;
    showMoreHandler: () => void;
}