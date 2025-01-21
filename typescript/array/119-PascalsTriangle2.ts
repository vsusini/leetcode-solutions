function getRow(rowIndex: number): number[] {
    const row: number[] = [1];

    for (let i = 1; i <= rowIndex; i++) {
        // Calculate the next element using the previous one
        row.push((row[row.length - 1] * (rowIndex - i + 1)) / i);
    }

    return row;
};