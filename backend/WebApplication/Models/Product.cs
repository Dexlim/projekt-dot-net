using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set;}
        public string ProductType { get; set;}
        public string Description { get; set;}    
        public double Price { get; set;}   
        public string PictureUrl { get; set;}
    }
}
