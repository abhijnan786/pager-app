
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TicketApp.Models
{
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Status { get; set; }
        public string  Mobile { get; set; }
        public string Email { get; set; }
        public string PagerStatus { get; set; }
        public string TeamId { get; set; }
        public DateObject EndDate { get; set; }
        public DateObject StartDate { get; set; }
    }
    public class DateObject
    {
        public int year { get; set; }
        public int month { get; set; }
        public int day { get; set; }
    }
}
