import React, { Component } from 'react'

 class PostForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    
    onChange (e) {
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post ={
            title:this.state.title,
            body:this.state.body,
        }

        fetch("http://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(post)
        }).then(res =>res.json())
          .then(data => console.log(data))
    }
    render() {
        return (
            <div>
                <h1>Add commitment:</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label > Title </label>
                        <br/>
                        <input type="text" name="title" 
                            onChange={this.onChange} value={this.state.title}/>
                    </div>

                    <div>
                        <label > Title </label>
                        <br/>
                        <textarea name="body" cols="30" rows="10" 
                            onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <button type="submit"> Add </button>
                </form>

            </div>
        )
    }
}

export default PostForm;
