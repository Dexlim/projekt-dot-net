using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Ingredient
    {
        [Key]
        public int IngredientId { get; set; }
        public string IngredientName { get; set; }  
        public int IngredientType { get;}
        public double Price { get; set; }
        public List<Recipe> Recipe { get; set; }
    }
}
