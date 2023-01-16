export type WhereTypes = {
    collection: string;
}

export enum FILTER_OPR {
    EQUAL = "eq",
    LESS = "ls",
    LESS_EQUAL = "els",
    GREATER = "gr",
    GREATER_EQUAL = "egr",
    NOT_EQUAL = "nor",
    ARRAY_CONTAINS = "iar",
    ARRAY_CONTAINS_ANY = "aar",
    IN = "in",
    NOT_IN = "nin",
}

export enum SORT {
    ASC = "1",
    DESC = "-1",
}

export type FilterType = {
    key: string;
    opr?: FILTER_OPR | "==" | "<" | "<=" | ">" | ">=" | "!=" | "array-contains" | "array-contains-any" | "in" | "not-in";
    val: string | number | boolean | null;
}

export type SortType = {
    key: string;
    val?: SORT | "asc" | "desc";
}

export type Pagination = {
    page: number;
    limit: number;
    total?: number;
}
