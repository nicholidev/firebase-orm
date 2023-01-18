import { SaveDataType, UpdateDataType } from "./update.type";
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


export const save = async (collection: any, save: SaveDataType) =>
{
    let query: any = collection;
    query = query.doc(save.id);

    const data = await query.update({ save, id: undefined });

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
