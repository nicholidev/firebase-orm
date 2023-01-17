import { FilterTypeItem } from "../read.type";

export const getOperator = ({ opr }: FilterTypeItem) =>
{
    const operatorMap: any = {
        "eq": "==",
        "ls": "<",
        "els": "<=",
        "gr": ">",
        "egr": ">=",
        "nor": "!=",
        "iar": "array-contains",
        "aar": "array-contains-any",
        "in": "in",
        "nin": "not-in",
    };

    const keys = ["eq", "ls", "els", "gr", "egr", "nor", "iar", "aar", "in", "nin"];
    const values = ["==", "<", "<=", ">", ">=", "!=", "array-contains", "array-contains-any", "in", "not-in"];

    if (!opr)
    {
        return "==";
    }

    if (keys.includes(opr))
    {
        return operatorMap[opr] || "==";
    }
    else
    {
        if (values.includes(opr))
        {
            return opr;
        }
        else
        {
            return "==";
        }
    }
};

