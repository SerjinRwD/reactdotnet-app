using Newtonsoft.Json;

namespace ReactDotNetApp.Models
{
    public class CommentModel
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("author")]
        public string Author { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
