import React, {Component} from "react";

class TOC extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.data === nextProps.data){
            return false;
        }
        return true;
    }

    render() {
        console.log('TOC render')
        return (
            <nav>
                <ul>
                    {this.props.data.map((data) =>(
                        <li key={data.id}>
                            <a href={data.id+".html"}
                               onClick={function(_mode, id, e) {
                                   e.preventDefault();
                                   this.props.onChangePage(_mode, id);
                               }.bind(this, 'read', data.id)}
                            >
                                {data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default TOC;