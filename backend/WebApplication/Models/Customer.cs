using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string StreetName {get; set; }
        public int HouseNumber { get; set; }
        public int PostalCode { get; set; }
        public int FlatNumber { get; set; }
        public List<Order> Order { get; set; }
    }
}
