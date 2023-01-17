import { CreateDataType, CreateManyDataType } from "./write.type";
import { addId } from "./utils";

export const create = async (
    collection: any,
    data: CreateDataType,
    id: string | null = null,
) =>
{
    const query: any = collection;

    let docRef: any = null;

    if (id)
    {
        docRef = await query.doc(id).set(data);
    }
    else
    {
        docRef = await query.add(data);
    }

    let temp: any = {};
    // Apply ID
    if (docRef.id)
    {
        temp = addId(docRef);
        if (temp.id)
        {
            return temp;
        }
    }

    return null;
};

export const createMany = async (
    collection: any,
    data: CreateManyDataType,
) =>
{
    const query: any = collection;

    if (data.length > 0)
    {
        return null;
    }

    const promises = data.map((i) =>
    {
        return new Promise( (resolve, reject) =>
        {
            try
            {
                query.add(i)
                    .then((r: any) =>
                    {
                        resolve(addId(r));
                    });
            }
            catch (e)
            {
                reject(e);
            }
        });
    });


    return Promise.all(promises);
};
