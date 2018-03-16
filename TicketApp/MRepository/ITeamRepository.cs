

using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using TicketApp.Models;

namespace TicketApp.MRepository
{
    public interface ITeamRepository
    {
        Task<IEnumerable<Team>> Get();
        Task<Team> Get(string Id);
        Task Add(Team Team);
        Task<string> Update(string Id, Team Team);
        Task<DeleteResult> Remove(string Id);
        Task<DeleteResult> RemoveAll();
    }
}
