import {create} from 'zustand';

const useFunctionStore = create(set => ({
    size: null,
    setSize: null,
}));

const useVariableStore = create(set => ({}));

export {useFunctionStore, useVariableStore};
