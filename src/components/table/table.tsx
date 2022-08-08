import './table.scss';

import { Fragment, ReactElement } from 'react';
import { tableHeadings } from '../../config';
import { formatDate } from '../../utils';

const Table = ({
  name,
  tableData = [],
  id,
  rowActions = [],
  clickRow = () => {},
  clickRowAction = () => {},
  isLoading = false,
}: PropTypes) => {
  const tableId = `${id}-table`;
  const headings: any[] = tableHeadings[name];

  return (
    <div className="w-full p-8 bg-white pb-0 flex-grow h-full overflow-y-auto flex flex-col">
      <div className="flex-grow overflow-y-hidden flex flex-col">
        <table className="Table">
          <thead className="">
            <tr>
              {headings.map((heading, headingIndex) => (
                <th key={`${tableId}-heading_${headingIndex}`}>
                  <div className={'flex items-center '}>
                    <span>{heading.name}</span>
                  </div>
                </th>
              ))}
              {rowActions?.length ? <th></th> : null}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row: any, rowIndex) => (
              <Fragment key={`${tableId}-heading_${rowIndex}`}>
                <tr
                  onClick={() => clickRow(row._id || row.id || rowIndex)}
                  key={`${tableId}_row-${rowIndex}`}
                  className="h-5 relative">
                  {headings.map((col, colIndex) => (
                    <td
                      key={`${tableId}_row_${rowIndex}_col-${colIndex}`}
                      className={`${col.customClass}  h-5 `}>
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
                    <p className="text-xs lg:text-base">No {name} available</p>
                  </div>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
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
  isLoading?: boolean;
}

export { Table };
