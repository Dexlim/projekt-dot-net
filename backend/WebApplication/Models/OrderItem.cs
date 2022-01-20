using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class OrderItem
    {
        [Key]
        public int OrderItemId { get; set; }
        public int PizzaId {get; set;}
        public double Amount { get; set;}   
        public int OrderId { get; set;}
    }
}
