import { SORT, SortTypeItem } from "../read.type";

export const getSort = (sort: SortTypeItem | SORT | "asc" | "desc") =>
{
    const sortMap: any = {
        "-1": "desc",
        "1": "asc",
    };

    const keys = ["-1", "1"];
    const values = ["asc", "desc"];

    if (!sort)
    {
        return undefined;
    }

    if (typeof sort === "string" || typeof sort === "number")
    {
        if (keys.includes(sort.toString().toLowerCase()))
        {
            return sortMap[sort.toString().toLowerCase()];
        }
        else
        {
            if (values.includes(sort.toString().toLowerCase()))
            {
                return sort.toString().toLowerCase();
            }
            else
            {
                return undefined;
            }
        }
    }
    else
    {
        const val: string | number = sort.val;

        if (!val)
        {
            return undefined;
        }

        if (keys.includes(val.toString().toLowerCase()))
        {
            return sortMap[val.toString().toLowerCase()];
        }
        else
        {
            if (values.includes(val.toString().toLowerCase()))
            {
                return val.toString().toLowerCase();
            }
            else
            {
                return undefined;
            }
        }
    }
};

