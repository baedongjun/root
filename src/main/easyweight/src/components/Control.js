import React, {Component} from "react";

class Control extends Component{
    render() {
        console.log('Control render')
        let data = this.props.data;
        return (
            <nav>
                <ul>
                    <li><a href={"/" + data[0].title} onClick={function(_mode, id, e) {
                               e.preventDefault();
                               this.props.onChangeMode(_mode, id);
                           }.bind(this, data[0].title, data[0].id)}
                        >
                            {data[0].title}
                        </a>
                    </li>
                    <li><a href={"/" + data[1].title} onClick={function(_mode, id, e) {
                        e.preventDefault();
                        this.props.onChangeMode(_mode, id);
                    }.bind(this, data[1].title, data[1].id)}
                    >
                        {data[1].title}
                    </a>
                    </li>
                    <li><input type="button" value={data[2].title} onClick={function(_mode, id, e) {
                        e.preventDefault();
                        this.props.onChangeMode(_mode, id);
                    }.bind(this, data[2].title, data[2].id)}
                    ></input>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Control;