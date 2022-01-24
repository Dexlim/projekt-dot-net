using Microsoft.EntityFrameworkCore;
using WebApplication.Models;

namespace WebApplication.Models
{
    public class RestaurantDbContext:DbContext
    {
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options):base(options)
        {

        }

        public DbSet<Product> Product { get; set; } 

        public DbSet<WebApplication.Models.Customer> Customer { get; set; }
    }
}
