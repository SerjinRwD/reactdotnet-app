using Microsoft.AspNetCore.Mvc;
using ReactDotNetApp.Models;
using System.Collections.Generic;

namespace ReactDotNetApp.Controllers
{
    [Produces("application/json")]
    [Route("comments")]
    public class CommentsController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static CommentsController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                },
            };
        }

        [HttpGet]
        public IList<CommentModel> Get()
        {
            Response.StatusCode = 200;
            return _comments;
        }

        [HttpPost]
        public void Post([FromBody] CommentModel comment)
        {
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);

            Response.StatusCode = 204;
        }
    }
}