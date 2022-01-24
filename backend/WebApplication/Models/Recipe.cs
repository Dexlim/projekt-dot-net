using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }
        public int ProductId { get; set; }
        public int IngredientId { get; set;}
    }
}
