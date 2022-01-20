using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Pizza
    {
        [Key]
        public int PizzaId { get; set; }
        public string PizzaName { get; set;}
        public string PictureUrl { get; set;}
        public string Description { get; set;}    
        public double Price { get; set;}   
        public bool PizzaByCustomer { get; set;}
        public List<Recipe> Recipe { get; set; }
        public List <OrderItem> OrderItem { get; set; }
    }
}
