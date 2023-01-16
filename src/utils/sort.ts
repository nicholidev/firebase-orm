import { SortType } from "../store/read.type";

export const getSort = ({ val }: SortType) =>
{
    const sortMap: any = {
        "-1": "desc",
        "1": "asc",
    };

    const keys = ["-1", "1"];
    const values = ["asc", "desc"];

    if (!val)
    {
        return undefined;
    }

    if (keys.includes(val))
    {
        return sortMap[val];
    }
    else
    {
        if (values.includes(val))
        {
            return val;
        }
        else
        {
            return undefined;
        }
    }
};

