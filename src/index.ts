import { find, findOne, findOneById } from "./read";
import { FILTER_OPR, SORT } from "./read.type";
import { create, createMany } from "./write";
import { update } from "./update";

const fireOrm = {
    find,
    findOne,
    findOneById,
    create,
    createMany,
    update,
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
    FILTER_OPR,
    SORT,
};
