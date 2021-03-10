using ComputerStore.DataLayer;
using ComputerStore.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ComputerStore.Controllers
{
    [Route("api/ComputerStore/[action]")]
    [ApiController]
    public class ComputerStoreController : ControllerBase
    {
        private ComputerStoreDbContext _context;
        public ComputerStoreController(ComputerStoreDbContext context)
        {
            _context = context;
        }

        [HttpGet] //Fetch all computer Details from In-Memory DB
        public ActionResult<IEnumerable<ComputerDetails>> GetAllComputerDetails()
        {
            try
            {
                List<ComputerDetails> computers = new List<ComputerDetails>();
                computers = _context.Computers.ToList();
                if (computers == null)
                {
                    return null;
                }
                return Ok(computers);
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }

        }
        [HttpGet] //Fetch all component Details from In-Memory DB
        public ActionResult<IEnumerable<ComponentDetails>> GetAllComponentDetails()
        {
            try
            {
                List<ComponentDetails> components = new List<ComponentDetails>();
                components = _context.Components.ToList();
                if (components == null)
                {
                    return null;
                }
                return Ok(components);
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}