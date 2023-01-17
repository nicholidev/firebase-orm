import { addId, getOperator, getSort } from "./utils";
import {
    FilterType, FilterTypeItem,
    FilterTypeObject,
    Pagination,
    SortType,
    SortTypeItem,
    SortTypeObject,
} from "./read.type";

// FIND
export const find = async (
    collection: any,
    filter: FilterType,
    sort: SortType,
    pagination: Pagination = {
        page: -1,
        limit: -1,
    }
) =>
{
    let query: any = collection;

    // Apply Filter
    query = applyFilter(query, filter);

    // GET TOTAL
    const total: number = await countTotal(query);

    // Apply Sort
    query = applySort(query, sort);

    // Apply Pagination
    query = applyPagination(query, pagination);

    const data: any = await query.get();

    const temp: any[] = [];
    // Apply ID
    for (const doc of data.docs)
    {
        temp.push(addId(doc));
    }

    return {
        data: temp,
        pagination: {
            total: total,
            page: pagination.page > 0 ? pagination.page : 0,
            limit: pagination.limit > 0 ? pagination.limit : -1,
        },
    };
};


// FIND ONE
export const findOne = async (
    collection: any,
    filter: FilterType
) =>
{
    let query: any = collection;
    query = applyFilter(query, filter);
    query.limit(1);
    const data: any = await query.get();

    let temp: any = {};
    // Apply ID
    for (const doc of data.docs)
    {
        temp = addId(doc);
        if (temp.id)
        {
            return temp;
        }
    }

    return null;
};


// FIND ONE BY ID
export const findOneById = async (collection: any, id: string) =>
{
    let query: any = collection;
    query = query.doc(id);

    const data: any = await query.listCollections();

    let temp: any = {};
    // Apply ID
    data.forEach((cl: any) =>
    {
        temp = addId(cl);
        if (temp.id)
        {
            return temp;
        }
    });

    return null;
};


// APPLY FILTER
const applyFilter = (query: any, filter: FilterType) =>
{
    if (Array.isArray(filter))
    {
        filter.map((i) =>
        {
            if (Array.isArray(i))
            {
                i.map((j) =>
                {
                    query = query.where(j.key, getOperator(j), j.val);
                });
            }
        });
    }
    else if (typeof filter === "object")
    {
        if (filter.key !== undefined && filter.opr !== undefined && filter.val !== undefined)
        {
            const flt: FilterTypeItem = filter as FilterTypeItem;
            query = query.where(filter.key, getOperator(flt), filter.val);
        }
        else
        {
            const obj: FilterTypeObject = filter;
            Object.keys(obj).map((i) =>
            {
                query = query.where(i, "==", obj[i]);
            });
        }
    }

    return query;
};

// APPLY SORT
const applySort = (query: any, sort: SortType) =>
{
    if (Array.isArray(sort))
    {
        sort.map((i) =>
        {
            query = query.orderBy(i.key, getSort(i));
        });
    }
    else
    {
        if (sort.key !== undefined)
        {
            const srt: SortTypeItem = { key: sort.key.toString(), val: sort.val };
            query = query.orderBy(sort.key, getSort(srt));
        }
        else
        {
            const obj: SortTypeObject = sort as SortTypeObject;
            Object.keys(obj).map((i) =>
            {
                query = query.orderBy(i, getSort(obj[i]));
            });
        }
    }

    return query;
};


// COUNT total
const countTotal = async (query: any): Promise<number> =>
{
    const countRef: any = await query.count().get();
    return countRef.data().count;
};

// APPLY Pagination
const applyPagination = (query: any, pagination: Pagination) =>
{
    // Apply Page
    if (pagination.page > 0)
    {
        query.startAt((query.page - 1) * query.limit);
    }

    // Apply Limit
    if (pagination.limit > 0)
    {
        query.limit(query.limit);
    }

    return query;
};
