

using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using TicketApp.Models;

namespace TicketApp.MRepository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> Get();
        Task<IEnumerable<Employee>> Get(string Id);
        Task Add(Employee Employee);
        Task<Employee> GetEmp(string Id);
        Task<string> Swap(string a, Employee b);
        Task<string> Update(string Id, Employee Employee);
        Task<DeleteResult> Remove(string Id);
        Task<DeleteResult> RemoveAll();
    }
}
