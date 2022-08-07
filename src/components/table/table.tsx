import './table.scss';

import { Fragment, ReactElement } from 'react';
import { CaretDownIcon } from '../vectors';
import { tableHeadings } from '../../config';
import { formatDate } from '../../utils';

const Table = ({
  name,
  tableData = [],
  id,
  rowActions = [],
  clickRow = () => {},
  clickRowAction = () => {},
  selected = [],
  onSelect = () => {},
  isLoading = false,
}: PropTypes) => {
  const tableId = `${id}-table`;
  const headings: any[] = tableHeadings[name];

  const toggleSelect = (id: number) => {
    if (selected.length !== tableData.length)
      onSelect(tableData.map((row: any, rowIndex) => rowIndex));
    else onSelect([]);
  };
  return (
    <div className="w-full p-8 bg-white pb-0 flex-grow h-full overflow-y-auto flex flex-col">
      <div className="flex-grow overflow-y-hidden flex flex-col">
        <table className="Table">
          <thead className="">
            <tr>
              {/* <th className="w-28">
                <p className="text-center">Status</p>
              </th> */}
              {headings.map((heading, headingIndex) => (
                <th key={`${tableId}-heading_${headingIndex}`}>
                  <div className={'flex items-center '}>
                    <span>{heading.name}</span>
                  </div>
                </th>
              ))}
              {rowActions?.length ? <th>Actions</th> : null}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, rowIndex) => (
              <Fragment key={`${tableId}-heading_${rowIndex}`}>
                <tr
                  onClick={() => clickRow(row._id || row.id || rowIndex)}
                  key={`${tableId}_row-${rowIndex}`}
                  className="h-5 relative">
                  {/* <td className="w-28">
                    <CheckBox value={row.isActive} onChange={() => toggleSelect(rowIndex)} />
                  </td> */}
                  {headings.map((col, colIndex) => (
                    <td
                      key={`${tableId}_row_${rowIndex}_col-${colIndex}`}
                      className={`${col.customClass}  h-5`}>
                      {col.key === 'createdAt' ? formatDate(row[col.key]) : row[col.key]}
                    </td>
                  ))}
                  {rowActions?.length ? (
                    <td className="flex flex-shrink items-center space-x-6">
                      {rowActions.map((action, actionIndex) => (
                        <div
                          className="cursor-pointer h-10 flex items-center justify-center"
                          onClick={() => clickRowAction(row._id || row.id || rowIndex, action.key)}
                          key={`${tableId}-${rowIndex}-action_${actionIndex}`}>
                          {typeof action.element === 'function'
                            ? action.element(row)
                            : action.element}
                        </div>
                      ))}
                    </td>
                  ) : null}
                </tr>
                <tr className="lg:hidden border-none !p-0">
                  <td colSpan={headings?.length + 1} className="!p-0 !m-0">
                    <hr />
                  </td>
                </tr>
              </Fragment>
            ))}
            {isLoading ? (
              <tr className="border-none mt-40">
                <td colSpan={headings?.length + 1} className="py-6  text-center text-lp-grey2">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xs lg:text-base">Loading...</p>
                  </div>
                </td>
              </tr>
            ) : !tableData.length ? (
              <tr className="border-none mt-40">
                <td colSpan={headings?.length + 1} className="py-6  text-center text-lp-grey2">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-xs lg:text-base">
                      All plans created would be displayed here
                    </p>
                  </div>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {!isLoading && (
          <div className="table-footer text-darkGrey text-opacity-50">
            <div className="flex items-center space-x-1 cursor-pointer">
              <div className="rotate-90">
                <CaretDownIcon />
              </div>
              <p>Previous</p>
            </div>
            <div className="flex items-center space-x-2">
              <p> Items per page:</p>
              <div className="cursor-pointer flex items-center">
                <p className="text-primary">10 Items</p>
                <CaretDownIcon />
              </div>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>Next</p>
              <div className="-rotate-90">
                <CaretDownIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface PropTypes {
  name: string;
  tableData?: Array<Object>;
  id: string;
  clickRow?: Function;
  clickRowAction?: Function;
  rowActions?: {
    element: ReactElement | ((row: any) => ReactElement);
    key: string;
  }[];
  selected?: Array<number>;
  onSelect?: Function;
  selectKey?: string;
  isLoading?: boolean;
}

export { Table };
