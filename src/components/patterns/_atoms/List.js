import React, {Component} from 'react';

class List extends Component {

    render() {
        let{
            order,
            className,
            ...attr
        } = this.props

        if (!order) {
            return (
                <ul className={className} {...attr}>
                </ul>
            )
        } else {
            return (
                <ol className={className} {...attr}>
                </ol>
            )
        }
    }
}

export default List;