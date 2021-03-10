using ComputerStore.Models;
using Microsoft.EntityFrameworkCore;

namespace ComputerStore.DataLayer
{
    public class ComputerStoreDbContext : DbContext
    {
        public DbSet<ComputerDetails> Computers { get; set; }
        public DbSet<ComponentDetails> Components { get; set; }
        public ComputerStoreDbContext(DbContextOptions<ComputerStoreDbContext> options)
        : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
