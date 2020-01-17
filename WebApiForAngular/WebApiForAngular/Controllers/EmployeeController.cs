using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiForAngular.Models;

namespace WebApiForAngular.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [Route("GetEmployees")]
        [HttpGet]
        public async Task<ICollection<Employee>> GetEmployees()
        {
           // AddEmployee();
            var employess = await _context.Employees.ToListAsync();
            return employess;           
        }
        public void AddEmployee()
        {
           
            Employee emp=new Employee();
            emp.EmployeeName="Nikhil";
            emp.Department="Developer";
            emp.Salary=16500;

            _context.Employees.Add(emp);
            _context.SaveChanges();
        }
    }
}