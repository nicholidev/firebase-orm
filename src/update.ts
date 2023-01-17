import { UpdateDataType } from "./update.type";
import { addId } from "./utils";

export const update = async (collection: any, id: string, updates: UpdateDataType) =>
{
    let query: any = collection;
    query = query.doc(id);

    const data = await query.update(updates);

    let temp: any = {};
    // Apply ID
    data.forEach((clt: any) =>
    {
        {
            temp = addId(clt);
            if (temp.id)
            {
                return temp;
            }
        }
    });


    return null;
};
