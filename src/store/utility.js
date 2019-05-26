export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        //we override fields in our updatedValuesObject in oldObject
        ...updatedValues
    }
};