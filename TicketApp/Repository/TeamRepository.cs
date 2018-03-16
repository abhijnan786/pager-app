using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TicketApp.DbModels;
using TicketApp.Models;
using TicketApp.MRepository;

namespace TicketApp.Repository
{
    public class TeamRepository : ITeamRepository
    {
        private readonly ObjectContext _context = null;

        public TeamRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task Add(Team Team)
        {
            await _context.Teams.InsertOneAsync(Team);
        }

        public async Task<IEnumerable<Team>> Get()
        {
            return await _context.Teams.Find(x => true).ToListAsync();
        }

        public async Task<Team> Get(string Id)
        {
            var team = Builders<Team>.Filter.Eq("Id", Id);
            return await _context.Teams.Find(team).FirstOrDefaultAsync();
        }

        public async Task<DeleteResult> Remove(string Id)
        {
            return await _context.Teams.DeleteOneAsync(Builders<Team>.Filter.Eq("Id", Id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.Teams.DeleteManyAsync(new BsonDocument());
        }

        public async Task<string> Update(string Id, Team Team)
        {
            await _context.Teams.ReplaceOneAsync(zz => zz.Id == Id, Team);
            return "";
        }
    }
}
