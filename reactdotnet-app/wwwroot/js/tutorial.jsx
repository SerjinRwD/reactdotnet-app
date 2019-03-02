class Comment extends React.Component {
    rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        const md = new Remarkable();
        return (
            <div className="w3-panel w3-white">
                <p className="w3-text-blue">{this.props.author}</p>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.filter(p => p.author !== null && p.text !== null).map(comment => (
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
        ));

        return (
            <div className="w3-bar">
                {commentNodes}
            </div>
        );
    }
}

/**
 * Form component. Handling Multiple Inputs
 * https://reactjs.org/docs/forms.html#handling-multiple-inputs
 * */
class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            text: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.onCommentSubmit({ author: this.state.author, text: this.state.text });
        this.setState({ author: '', text: '' });
    }
    render() {
        return (
            <div className="w3-white">
                <h2 className="w3-blue w3-panel">Leave a comment</h2>
                <form className="w3-container" onSubmit={this.handleSubmit}>
                    <div className="w3-container">
                        <label htmlFor="name">Your name</label>
                        <input className="w3-input" name="author" type="text" value={this.state.author} onChange={this.handleInputChange} required />
                    </div>
                    <div className="w3-container w3-section">
                        <label htmlFor="text">Your comment</label>
                        <input className="w3-input" name="text" type="text" value={this.state.text} onChange={this.handleInputChange} required />
                    </div>
                    <div className="w3-container w3-section w3-right">
                        <input className="w3-button w3-blue" style={{ minWidth: '120px' }} type="submit" value="Post" />
                    </div>
                </form>
            </div>
        );
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    componentWillMount() {
        this.loadComments();
    }
    loadComments() {
        fetch(this.props.url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }
    handleCommentSubmit(comment) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ author: comment.author, text: comment.text }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 204) {
                this.loadComments();
            }
        });
    }
    render() {
        return (
            <div className="w3-container w3-content">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}

const url = Router.action('comments', '');

ReactDOM.render(<CommentBox url={url} />, document.getElementById('content'));