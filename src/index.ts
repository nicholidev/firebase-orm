import { find, findOne, findOneById } from "./read";
import { FILTER_OPR, SORT } from "./read.type";
import { create, createMany } from "./write";
import { save, update } from "./update";

const fireOrm = {
    find,
    findOne,
    findOneById,
    create,
    createMany,
    update,
    save,
    FILTER_OPR,
    SORT,
};

export {
    fireOrm as default,
    find,
    findOne,
    findOneById,
    create,
    createMany,
    update,
    save,
    FILTER_OPR,
    SORT,
};
