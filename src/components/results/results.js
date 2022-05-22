import './results.scss';
import JSONPretty from 'react-json-pretty';

// const Results = function (props) {
//   if (!props.loading) {
//     return (
//       <>
//         <div id='headers'>
//           <h2>Headers</h2>
//           <JSONPretty id='json-pretty' data={props.headers} />
//         </div>
//         <div id='results'>
//           <h2>Result</h2>
//           <JSONPretty id='json-pretty' data={props.url} />
//         </div>
//       </>
//     );
//   } else {
//     return <h3>Loading...</h3>;
//   }
// };

const Results = (props) => {
  let results = props.url;
  let methodUrl = props.history.methodUrl;
  if (!props.loading) {
    return (
      <div id='result-page'>
        <div id='history'>
          <button onClick={props.handleClear}>clear History</button>
          <h2 id='headers-h'>{methodUrl[0] ? 'History' : ''}</h2>
          {/* <JSONPretty
        id='json-pretty'
        data={methodUrl[0]?{'method:url': methodUrl }:'history is clear'}
      ></JSONPretty> */}
          <ul>
            {methodUrl.map((history, indx) => {
              return (
                <li
                  className='history-list'
                  key={indx}
                  name={history}
                  onClick={props.handleClick}
                >
                  {history}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 id='headers-h'>{props.headers ? 'Headers' : ''}</h2>
          <JSONPretty id='json-pretty' data={props.headers}></JSONPretty>
          <h2 id='results-h'>{results || props.error ? 'Results' : ''}</h2>
          <div id='results-json'>
            <JSONPretty
              id='json-pretty'
              data={props.error ? props.error : results}
            ></JSONPretty>
          </div>
        </div>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};
export default Results;
