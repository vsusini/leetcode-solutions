function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s;
  
    const rows: string[] = Array(Math.min(numRows, s.length)).fill("");
    let currRow = 0;
    let goingDown = false;
  
    for (const char of s) {
      rows[currRow] += char;
      // Reverse direction if reaching top or bottom row
      if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
      currRow += goingDown ? 1 : -1;
    }
  
    return rows.join("");
  }