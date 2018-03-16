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
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ObjectContext _context = null;

        public EmployeeRepository(IOptions<Settings> settings)
        {
            _context = new ObjectContext(settings);
        }

        public async Task Add(Employee Employee)
        {
            await _context.Employees.InsertOneAsync(Employee);
        }

        public async Task<IEnumerable<Employee>> Get()
        {
            return await _context.Employees.Find(x => true).ToListAsync();
        }

        public async Task<IEnumerable<Employee>> Get(string Id)
        {
            var employee = Builders<Employee>.Filter.Eq("TeamId", Id);
            return await _context.Employees.Find(employee).ToListAsync();
        }

        public async Task<Employee> GetEmp(string Id)
        {
            
                var employee = Builders<Employee>.Filter.Eq("Id", Id);
                return await _context.Employees.Find(employee).FirstOrDefaultAsync();
            
        }

        public async Task<DeleteResult> Remove(string Id)
        {
            return await _context.Employees.DeleteOneAsync(Builders<Employee>.Filter.Eq("Id", Id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.Employees.DeleteManyAsync(new BsonDocument());
        }

        public async Task<string> Swap(string a, Employee b)
        {
            var Adata = await GetEmp(a);
            Employee Bdata = b;
            var tempStartDate = Bdata.StartDate;
            var tempEndDate = Bdata.EndDate;

            Bdata.StartDate = Adata.StartDate;
            Bdata.EndDate = Adata.EndDate;
            Adata.StartDate = tempStartDate;
            Adata.EndDate = tempEndDate;
            await Update(Adata.Id, Adata);
            await Update(Bdata.Id, Bdata);
            
            return "";

        }

        public  async Task<string> Update(string Id, Employee Employee)
        {
            await _context.Employees.ReplaceOneAsync(zz => zz.Id == Id, Employee);
            return "";
        }
    }

}
