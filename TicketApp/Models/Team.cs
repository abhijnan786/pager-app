
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TicketApp.Models
{
    public class Team
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { set; get; }
        public string TeamName { set; get; }
        public string Status { set; get; }
        public string Count { set; get; }
        public string TeamId { set; get; }

    }
}
