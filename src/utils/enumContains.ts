const enumContains = (ENUM: any, value: string | number) => {
    return Object.values(ENUM).includes(value);
}

export default enumContains;