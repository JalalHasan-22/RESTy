import './form.scss';
import { useRef } from 'react';
const Form = function (props) {
  const urlRef = useRef();
  function updateURL(e) {
    e.preventDefault();
    const url = urlRef.current.value;
    props.onSubmit(url);
  }
  return (
    <>
      <form id='form' onSubmit={updateURL}>
        <div id='submit'>
          <input
            ref={urlRef}
            type='text'
            id='url-input'
            placeholder='http://url.example'
          />
          <input id='submit' type='submit' value='Go ' onSubmit={updateURL} />
        </div>
        <div id='radio'>
          <input
            type='radio'
            id='get'
            name='methods'
            value='get'
            onClick={props.updateMethod}
          />
          <label>get</label>
          <input
            type='radio'
            id='post'
            name='methods'
            value='post'
            onClick={props.updateMethod}
          />
          <label>post</label>
          <input
            type='radio'
            id='put'
            name='methods'
            value='put'
            onClick={props.updateMethod}
          />
          <label>put</label>
          <input
            type='radio'
            id='delete'
            name='methods'
            value='delete'
            onClick={props.updateMethod}
          />
          <label>delete</label>
          <textarea
            id='text-area'
            onChange={props.handleBodyChange}
            cols='50'
            rows='10'
          />
        </div>
      </form>
    </>
  );
};

export default Form;
