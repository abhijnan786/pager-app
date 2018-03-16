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

    public class EmployeesController
    {

        private readonly IEmployeeRepository _employeeRepository;

        public EmployeesController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        [HttpGet]
        public Task<string> Get()
        {
            return this.GetEmployee();
        }
        private async Task<string> GetEmployee()
        {
            var employees = await _employeeRepository.Get();
            return JsonConvert.SerializeObject(employees);
        }
        [HttpGet("{Id}")]
        public Task<string> Get(string Id)
        {
            return this.GetEmployeeById(Id);
        }
        private async Task<string> GetEmployeeById(string Id)
        {
            var employees = await _employeeRepository.Get(Id);
            return JsonConvert.SerializeObject(employees);
        }
        [HttpPost]
        public async Task<string> Post([FromBody] Employee employee)
        {
            await _employeeRepository.Add(employee);
            return "true";
        }
        [HttpPost("{Id}")]
        public async Task<string> Post(string Id, [FromBody] Employee employee)
        {
            await _employeeRepository.Swap(Id, employee);
            return "true";
        }
        [HttpPut("{Id}")]
        public async Task<string> Put(string Id, [FromBody] Employee employee)
        {
            if (string.IsNullOrEmpty(Id)) return "Invalid Input !!!";
                employee.PagerStatus = "";
             await _employeeRepository.Update(Id, employee);
            return "true";

        }
        [HttpDelete("{Id}")]
        public async Task<string> Delete(string Id)
        {
            if (string.IsNullOrEmpty(Id)) return "Invalid Input !!!";
             await _employeeRepository.Remove(Id);
            return "true";

        }
    }
}
