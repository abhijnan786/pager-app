using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TicketApp.Models;
using TicketApp.MRepository;

namespace TicketApp.Controllers
{
    [Route("dist/api/[controller]")]
    public class TeamsController
    {
        
        private readonly ITeamRepository _teamRepository;

        public TeamsController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }
        [HttpGet]
        public Task<string> Get()
        {
            return this.GetTeam();
        }
        private async Task<string> GetTeam()
        {
            var Teams = await _teamRepository.Get();
            return JsonConvert.SerializeObject(Teams);
        }
        [HttpGet("{Id}")]
        public Task<string> Get(string Id)
        {
            return this.GetTeamById(Id);
        }
        private async Task<string> GetTeamById(string Id)
        {
            var Teams = await _teamRepository.Get(Id) ?? new Team();
            return JsonConvert.SerializeObject(Teams);
        }
        [HttpPost]
        public async Task<string> Post([FromBody] Team Team)
        {
            Team.TeamId = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds().ToString();
            await _teamRepository.Add(Team);
            return "true";
        }
        [HttpPut("{Id}")]
        public async Task<string> Put(string Id, [FromBody] Team Team)
        {
            if (string.IsNullOrEmpty(Id)) return "Invalid Input !!!";
             await _teamRepository.Update(Id, Team);
            return "true";

        }
        [HttpDelete("{Id}")]
        public async Task<string> Delete(string Id)
        {
            if (string.IsNullOrEmpty(Id)) return "Invalid Input !!!";
            await _teamRepository.Remove(Id);
            return "true";

        }
    }
}
