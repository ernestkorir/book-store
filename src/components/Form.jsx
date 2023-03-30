const Form = () => (
    <div>
      <form className="Form flexColumn">
        <input type="text" id="author" placeholder="Author" />
        <input type="text" id="title" placeholder="Book Title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
  export default Form;