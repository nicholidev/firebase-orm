export const addId = (doc: any) =>
{
    if (!doc) return;

    const out = doc.data();
    if (!out) return;

    out.id = doc.id;

    return out;
};
