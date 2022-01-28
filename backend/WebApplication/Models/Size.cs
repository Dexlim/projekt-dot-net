using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Size
    {
        [Key]
        public int SizeId { get; set; }
        public string SizeName { get; set; }
        public double AdditionalPrice { get; set; }
    }
}
