const TableHead = () => (
  <thead>
    <tr>
      <th>
        <input type="checkbox" />
      </th>
      <th>Category</th>
      <th>Assigned</th>
      <th>Activity</th>
      <th>Available</th>
    </tr>
  </thead>
);

const CategoryGroup = ({
  category,
  assigned,
  activity,
  available,
  children,
}) => (
  <>
    <tr className="has-background-dark">
      <th>
        <input type="checkbox" />
      </th>
      <th>{category}</th>
      <th>{assigned}</th>
      <th>{activity}</th>
      <th>{available}</th>
    </tr>
    {children}
  </>
);

const Category = ({ category, assigned, activity, available }) => (
  <tr>
    <td>
      <input type="checkbox" />
    </td>
    <td>{category}</td>
    <td>{assigned}</td>
    <td>{activity}</td>
    <td>{available}</td>
  </tr>
);

const data = {
  edges: [
    {
      node: {
        name: 'Credit Card Payments',
        categories: {
          edges: [
            {
              node: {
                name: 'Cash Magnnet Card',
              },
            },
          ],
        },
      },
    },
    {
      node: {
        name: 'Bills',
        categories: {
          edges: [
            {
              node: {
                name: 'Rent',
              },
            },
            {
              node: {
                name: 'Electric',
              },
            },
            {
              node: {
                name: 'Insurance',
              },
            },
            {
              node: {
                name: 'Internet',
              },
            },
          ],
        },
      },
    },
  ],
};

const BudgetTable = () => (
  <table className="table is-fullwidth">
    <TableHead />
    <tbody>
      {data.edges.map((categoryGroupEdge) => (
        <CategoryGroup
          category={categoryGroupEdge.node.name}
          assigned={-733.83}
          activity={725.84}
          available={174.58}
        >
          {categoryGroupEdge.node.categories.edges.map((categoryEdge) => (
            <Category
              category={categoryEdge.node.name}
              assigned={-733.83}
              activity={725.84}
              available={174.58}
            />
          ))}
        </CategoryGroup>
      ))}
    </tbody>
  </table>
);

export default BudgetTable;
