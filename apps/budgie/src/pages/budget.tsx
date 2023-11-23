import BudgetTable from 'src/components/BudgetTable';
import Layout from 'src/components/Layout';

const Card = ({ title }) => (
  <div className="message is-primary">
    <header className="message-header">
      <p className="is-size-7">{title}</p>
    </header>
    <div className="message-body">
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
        <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);

const Budget = () => {
  return (
    <Layout className="layout">
      <header className="hero">
        <div className="pl-5 pr-5 pt-4 pb-4 is-flex">
          <h1>JUL 2022</h1>
        </div>
      </header>
      <main className="budget-layout">
        <div>
          <div className="is-flex is-justify-content-space-between p-1 has-background-black">
            <button className="button is-secondary is-small">
              Add Category
            </button>
          </div>
          <div>
            <BudgetTable />
          </div>
        </div>
        <div id="budget-aside" className="p-4 has-background-darker">
          <Card title="Assign Funds" />
          <Card title="Available Balance" />
          <Card title="Notes" />
        </div>
      </main>
    </Layout>
  );
};

export default Budget;
