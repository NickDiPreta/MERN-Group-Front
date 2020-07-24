import React from 'react'

function CommentForm({ comment, handleSubmit, handleChange, username}){
    return (
    <form className="CommentForm" onSubmit={handleSubmit}>
        {/* <input 
        placeholder={username}
        value={username}
        onChange={handleChange}
        name='username'
        />  */}
        <input 
        placeholder="Leave a Comment"
        value={comment.commentBody}
        onChange={handleChange}
        name='commentBody'
        /> 
        <button type="submit">Submit</button>
    </form>
    )
}

export default CommentForm