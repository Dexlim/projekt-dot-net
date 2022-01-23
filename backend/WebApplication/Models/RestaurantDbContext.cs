using Microsoft.EntityFrameworkCore;

namespace WebApplication.Models
{
    public class RestaurantDbContext:DbContext
    {
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options):base(options)
        {

        }

        public DbSet<Product> Product { get; set; } 
    }
}
