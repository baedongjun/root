import React, {Component} from "react";

class CreateContent extends Component{
    render() {
        console.log('CreateContent render')
        return (
            <article>
                <h2>{this.props.title}</h2>
                <form action="/update_process" method="post"
                      onSubmit={function(e){
                          e.preventDefault();
                          this.props.onSubmit(e.target.title.value, e.target.desc.value);
                      }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholder="title"/>
                    </p>
                    <p>
                        <input type="text" name="desc" placeholder="desc"/>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </article>
        )
    }
}

export default CreateContent