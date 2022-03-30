import * as React from 'react';

export function Upload () {
  // FIX : delete file upload for shop
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    // FIX : change server route later
    const data = document.getElementById('file') as HTMLInputElement
    const fileList = data.files as FileList
    console.log(fileList[0])
    // const packet = data?.files[0] as File
      fetch('some-path-to-server', {
        method : 'POST', 
        body : fileList[0]
      })
  } 
  return (
    <div>
      {/* FIX: upload NFT images here */}
      <h1>Upload route</h1>
      
      <p>
        Upload NFT image. Note that only .png format supported.
      </p>

      {/* user uploads a NFT image here */}
      <form 
        onSubmit={handleSubmit}
        id='uploadNft' 
        encType='multipart/form-data'>
        {/* accept only .png file */}
        <input type="file" name="file" id="file" accept='image/png'/>
        <button type="submit">Upload</button>
      </form>
      
    </div>
  );
}
