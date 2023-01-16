import { addId, getOperator, getSort } from "../utils";
import { FilterType, Pagination, SortType } from "./read.type";

export const find = async (
    collection: any,
    filter: FilterType[] = [],
    sort: SortType[] = [],
    pagination: Pagination = {
        page: -1,
        limit: -1,
    }
) =>
{
    let query: any = collection;

    // Apply Filter
    filter.map((i) =>
    {
        query = query.where(i.key, getOperator(i), i.val);
    });

    const countRef: any = await query.count().get();
    const total: number = await countRef.data().count;
    // Apply Sort
    sort.map((i) =>
    {
        query = query.orderBy(i.key, getSort(i));
    });

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
            ...pagination,
            total: total,
        },
    };
};


