#include <iostream>
#include <poi/poi.hpp> // Include Apache POI C++ headers

int main()
{
    // Initialize the library
    poi::initialize();

    // Open the Excel file
    poi::FileStream fileStream("example.xlsx");
    poi::Workbook workbook(fileStream);
    poi::Sheet sheet = workbook.getSheetAt(0); // Assuming the first sheet

    // Read data from the Excel file
    for (int i = 0; i < sheet.getLastRowNum(); ++i)
    {
        poi::Row row = sheet.getRow(i);
        for (int j = 0; j < row.getLastCellNum(); ++j)
        {
            poi::Cell cell = row.getCell(j);
            std::cout << cell.getStringValue() << "\t"; // Assuming the cell contains a string value
        }
        std::cout << std::endl;
    }

    // Close the Excel file
    fileStream.close();

    // Shutdown the library
    poi::cleanup();

    return 0;
}
