import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPart} from '../features/parts/partSlice';

function PartForm() {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    console.log(text);

    dispatch(createPart({ text }));
    // to clear from
    setText('');
  }

  return(
    <div>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="from-group">
            <label htmlFor="text">Part</label>
            <input 
            className = "border border-black"
            type="text" name = 'text' id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
          <button type="submit" className="px-8 py-3 font-semibold rounded-full bg-lime-500	 dark:text-gray-800">Add Part</button>
          </div>
          </form>
      </section>
    </div>
  )
}

export default PartForm;