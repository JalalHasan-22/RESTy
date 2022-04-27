import './results.scss';
import JSONPretty from 'react-json-pretty';

const Results = function (props) {
  if (!props.loading) {
    return (
      <>
        <div id='headers'>
          <h2>Headers</h2>
          <JSONPretty id='json-pretty' data={props.headers} />
        </div>
        <div id='results'>
          <h2>Result</h2>
          <JSONPretty id='json-pretty' data={props.url} />
        </div>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Results;
