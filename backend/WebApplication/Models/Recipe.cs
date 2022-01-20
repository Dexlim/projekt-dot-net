using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication.Models
{
    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }
        public int PizzaId { get; set; }
        public int IngredientId { get; set; }
        public int NumberOfPortions { get; set; }
    }
}
