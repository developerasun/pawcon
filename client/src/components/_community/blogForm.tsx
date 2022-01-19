import * as React from 'react';

export interface IBlogFormProps {
}

export function BlogForm (props: IBlogFormProps) {

    // set form values with useState and onChange when they are changed

    // send post request to save blog post
    React.useEffect(()=>{
        // document.forms retrieves all forms in document
        const blogForm = document.forms[0]
        const title = blogForm.title // document.forms.title is preserved

        // type assertion to HTMLInputElement is need to access 'value' property
        const blogTitle = blogForm.blogTitle as HTMLInputElement
        const author = blogForm.author as HTMLInputElement
        const description = blogForm.description as HTMLInputElement

        console.log(blogTitle.value) // access to form element
        console.log(author.value) // access to form element
        console.log(description.value) // access to form element

        // routing not added yet
        fetch('/community/blog', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                title : blogTitle.value, 
                description : description.value, 
                author : author.value
            })
        })
        
    }, [])

    const handleSubmit = () => {
        console.log("clicked")
    }
  return (
    <div>
      <form onSubmit={handleSubmit} id='blogForm'>
        <input type="text" name="blogTitle" id="" placeholder='title' value={"temp here"} />
        <input type="text" name="author" id="" placeholder='author'  value={"temp here"}/>
        <input type="text" name="description" id="" placeholder='description' value={"temp here"}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
